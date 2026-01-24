import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo
} from "react";

import { useAuthStore, type User } from "@/store/authStore";

type AuthContextValue = {
  user: User | null;
  register: (input: { name: string; email: string; password: string }) => Promise<void>;
  login: (input: { email: string; password: string }) => Promise<void>;
  logout: () => void;
};

const STORAGE_USER_KEY = "kip_user";
const STORAGE_CREDS_KEY = "kip_creds"; // demo-only

const AuthContext = createContext<AuthContextValue | null>(null);

function readJson<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function writeJson(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function AuthProvider({ children }: PropsWithChildren) {
  const user = useAuthStore((s) => s.user);
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    const saved = readJson<User>(STORAGE_USER_KEY);
    if (saved) setUser(saved);
  }, [setUser]);

  const register = useCallback(
    async (input: { name: string; email: string; password: string }) => {
      // Demo auth: store credentials locally.
      const newUser: User = {
        id: `u_${Date.now()}`,
        name: input.name.trim() || "User",
        email: input.email.trim().toLowerCase()
      };
      writeJson(STORAGE_CREDS_KEY, { email: newUser.email, password: input.password });
      writeJson(STORAGE_USER_KEY, newUser);
      setUser(newUser);
    },
    [setUser]
  );

  const login = useCallback(
    async (input: { email: string; password: string }) => {
      const creds = readJson<{ email: string; password: string }>(STORAGE_CREDS_KEY);
      const normalizedEmail = input.email.trim().toLowerCase();
      if (!creds || creds.email !== normalizedEmail || creds.password !== input.password) {
        throw new Error("Invalid credentials");
      }
      const existingUser =
        readJson<User>(STORAGE_USER_KEY) ??
        ({
          id: `u_${Date.now()}`,
          name: "User",
          email: normalizedEmail
        } satisfies User);
      writeJson(STORAGE_USER_KEY, existingUser);
      setUser(existingUser);
    },
    [setUser]
  );

  const logout = useCallback(() => {
    if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_USER_KEY);
    setUser(null);
  }, [setUser]);

  const value = useMemo<AuthContextValue>(
    () => ({ user, register, login, logout }),
    [user, register, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

