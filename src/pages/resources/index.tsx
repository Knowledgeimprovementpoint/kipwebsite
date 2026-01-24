import Head from "next/head";
import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/UI/table";
import { resources } from "@/utils/resources";

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>Resources — KIP</title>
        <meta
          name="description"
          content="Structured list of learning resources including documentation, guides, and external references."
        />
      </Head>
      <motion.section
        className="space-y-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shadow-sm dark:bg-emerald-500/15 dark:text-emerald-200">
            <Link2 className="h-4 w-4" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Resources</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-700 dark:text-slate-300">
              Use these curated links to go deeper on topics across technology, security, and communication.
            </p>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4">Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-32 text-right">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resources.map((res) => (
              <TableRow key={res.href}>
                <TableCell className="font-medium text-slate-900 dark:text-slate-50">{res.name}</TableCell>
                <TableCell className="text-sm text-slate-700 dark:text-slate-300">{res.description}</TableCell>
                <TableCell className="text-right text-sm">
                  <a
                    href={res.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 underline underline-offset-4 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-200"
                  >
                    Open
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.section>
    </>
  );
}

