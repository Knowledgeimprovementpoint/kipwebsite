import { create } from "zustand";

export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "kip_theme";

type ThemeState = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
};

function readInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "dark" ? "dark" : "light";
}

function applyTheme(theme: ThemeMode) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "light",
  setTheme: (theme) => {
    set({ theme });
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, theme);
    }
    applyTheme(theme);
  },
  toggleTheme: () => {
    const next: ThemeMode = get().theme === "dark" ? "light" : "dark";
    get().setTheme(next);
  }
}));

// Client-only hydration helper (call once from a component).
export function initThemeFromStorage() {
  const theme = readInitialTheme();
  useThemeStore.getState().setTheme(theme);
}

