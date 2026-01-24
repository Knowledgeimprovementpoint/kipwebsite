import Head from "next/head";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — KIP</title>
        <meta
          name="description"
          content="Learn about Knowledge Improvement Point (KIP), an internal platform focused on building organization-wide capability."
        />
      </Head>
      <motion.section
        className="space-y-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 shadow-sm dark:bg-indigo-500/15 dark:text-indigo-200">
            <Compass className="h-4 w-4" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">About KIP</h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Knowledge Improvement Point (KIP) is an internal educational platform designed to help teams build practical,
              role-relevant skills. The focus is on short, targeted courses and curated resources that fit into busy schedules.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-sm leading-relaxed text-slate-700 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80 dark:text-slate-300">
            KIP combines structured learning paths with self-serve content, making it easy for individuals, managers, and
            teams to track progress and continuously improve. Courses are intentionally short, focused, and designed to be
            completed alongside daily work.
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-indigo-500/10 via-sky-500/5 to-emerald-400/10 p-5 text-sm leading-relaxed text-slate-700 shadow-sm backdrop-blur dark:border-slate-800/80 dark:from-indigo-500/10 dark:via-slate-900 dark:to-emerald-400/10 dark:text-slate-200">
            By centralizing knowledge in one place, KIP reduces onboarding time, improves consistency across teams, and
            creates a shared language for how work gets done—from communication and collaboration to security and execution.
          </div>
        </div>
      </motion.section>
    </>
  );
}

