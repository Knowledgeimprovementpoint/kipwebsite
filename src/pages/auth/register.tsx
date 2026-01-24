import { FormEvent, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import { useAuth } from "@/components/Auth/AuthProvider";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await register({ name, email, password });
      void router.push("/dashboard");
    } catch (err) {
      setError("Could not create account. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Register — KIP</title>
        <meta
          name="description"
          content="Create your Knowledge Improvement Point (KIP) account to start learning and tracking your progress."
        />
      </Head>
      <section className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Create account</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            A simple profile so we can save your course progress.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-800 dark:text-slate-200" htmlFor="name">
              Name
            </label>
            <Input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              autoComplete="new-password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </Button>
          <p className="text-center text-xs text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link href="/auth/login" className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-slate-50">
              Sign in
            </Link>
          </p>
        </form>
      </section>
    </>
  );
}

