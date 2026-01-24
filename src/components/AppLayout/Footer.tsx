import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80 py-10 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
              Knowledge Improvement Point
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Contact:{" "}
              <a className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-slate-50" href="mailto:contact@kip.example">
                contact@kip.example
              </a>
            </p>
          </div>
          <div className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
            <a
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
              href="#"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm transition-colors hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
              href="#"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm transition-colors hover:border-red-400 hover:text-red-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
              href="#"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
              href="#"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} KIP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

