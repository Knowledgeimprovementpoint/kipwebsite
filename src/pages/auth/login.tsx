import { FormEvent, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import { useAuth } from "@/components/Auth/AuthProvider";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login({ email, password });
      const next = typeof router.query.next === "string" ? router.query.next : "/dashboard";
      void router.push(next);
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Login — KIP</title>
        <meta name="description" content="Login to Knowledge Improvement Point (KIP) to access courses and resources." />
      </Head>
      <section className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Login</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Enter your credentials to access courses and saved progress.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-800 dark:text-slate-200" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-800 dark:text-slate-200" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
          <p className="text-center text-xs text-slate-600 dark:text-slate-400">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-slate-50">
              Create one
            </Link>
          </p>
        </form>
      </section>
    </>
  );
}

