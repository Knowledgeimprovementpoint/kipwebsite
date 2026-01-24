import Head from "next/head";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact — KIP</title>
        <meta
          name="description"
          content="Get in touch with the Knowledge Improvement Point (KIP) team for support, feedback, or partnerships."
        />
      </Head>
      <motion.section
        className="space-y-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 shadow-sm dark:bg-sky-500/15 dark:text-sky-200">
            <Mail className="h-4 w-4" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Contact</h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              For queries related to courses, access, or feedback about the platform, reach out to the KIP team using the
              details below.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
          <div className="space-y-2 rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-sm text-slate-700 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80 dark:text-slate-300">
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:contact@kip.example"
                className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-slate-50"
              >
                contact@kip.example
              </a>
            </p>
            <p>
              <span className="font-medium">Slack:</span> #kip-help
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-indigo-200/70 bg-indigo-50/40 p-5 text-xs leading-relaxed text-slate-700 shadow-sm dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-slate-200">
            Response times may vary based on volume of requests, but the KIP team aims to respond within{" "}
            <span className="font-semibold text-indigo-700 dark:text-indigo-200">1–2 business days.</span> For urgent
            platform issues, please use the #kip-help Slack channel.
          </div>
        </div>
      </motion.section>
    </>
  );
}

