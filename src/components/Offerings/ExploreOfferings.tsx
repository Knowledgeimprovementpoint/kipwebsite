import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import offeringsData from "@/utils/offerings.json";
import { Card, CardContent } from "@/components/UI/card";

type OfferingClass = (typeof offeringsData.classes)[number];
type OfferingMaterial = (typeof offeringsData.materials)[number];

const CLASS_QUERY_KEY = "classLevel";

const classes = offeringsData.classes;
const materials = offeringsData.materials;

function getDefaultClass(): OfferingClass {
  return classes[0]!;
}

export function ExploreOfferings() {
  const router = useRouter();
  const [selectedClassSlug, setSelectedClassSlug] = useState<string>(
    () => getDefaultClass().slug,
  );

  // Initialize from URL on first render when router is ready.
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const fromQuery = router.query[CLASS_QUERY_KEY];
  //   if (typeof fromQuery === "string") {
  //     const match = classes.find((c) => c.slug === fromQuery);
  //     if (match) {
  //       setSelectedClassSlug(match.slug);
  //       return;
  //     }
  //   }
  //   // Ensure default is reflected in URL.
  //   const fallback = getDefaultClass().slug;
  //   setSelectedClassSlug(fallback);
  //   void router.replace(
  //     {
  //       pathname: router.pathname,
  //       query: { ...router.query, [CLASS_QUERY_KEY]: fallback },
  //     },
  //     undefined,
  //     { shallow: true },
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [router.isReady]);

  const selectedClass = useMemo(
    () =>
      classes.find((c) => c.slug === selectedClassSlug) ?? getDefaultClass(),
    [selectedClassSlug],
  );

  function handleSelect(klass: OfferingClass) {
    setSelectedClassSlug(klass.slug);
    void router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, [CLASS_QUERY_KEY]: klass.slug },
      },
      undefined,
      { shallow: true },
    );
  }

  return (
    <section className="mt-16 space-y-6">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
          LEARNING PATHS
        </p>
        <h2 className="text-balance text-2xl font-semibold text-slate-900 dark:text-slate-50">
          Explore all our{" "}
          <span className="relative inline-block">
            <span className="relative z-10">offerings</span>
            <span className="absolute inset-x-0 bottom-0 h-2 rounded-full bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 dark:from-indigo-500/50 dark:via-sky-500/40 dark:to-emerald-500/40" />
          </span>
        </h2>
      </div>

      <div className=" mx-4 overflow-x-auto p-2 !no-scrollbar">
        <div className="inline-flex min-w-full gap-3 rounded-full bg-white/70 p-1 text-sm shadow-sm ring-1 ring-slate-200/80 backdrop-blur dark:bg-slate-950/80 dark:ring-slate-800/80">
          {classes.map((klass) => {
            const isActive = klass.slug === selectedClass.slug;
            return (
              <button
                key={klass.slug}
                type="button"
                onClick={() => handleSelect(klass)}
                className={[
                  "whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                  isActive
                    ? "bg-slate-900 text-slate-50 shadow-sm dark:bg-slate-50 dark:text-slate-900"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-slate-50",
                ].join(" ")}
              >
                {klass.label}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        className="grid gap-5 md:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {materials.map((material, index) => {
          const href = `/materials/${selectedClass.slug}/${material.slug}`;
          return (
            <motion.div
              key={material.slug}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Link
                href={href}
                aria-label={`${material.title} for ${selectedClass.label}`}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-indigo-50 via-slate-50 to-emerald-50 p-4 shadow-md hover:shadow-xl dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
                  <CardContent className="flex flex-col gap-3 p-0">
                    <div className="flex items-center justify-between gap-3">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white/80 ring-2 ring-indigo-100 dark:bg-slate-950 dark:ring-indigo-500/40">
                        <Image
                          src={material.image}
                          alt={material.title}
                          width={56}
                          height={56}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <span className="rounded-full bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-700 shadow-sm dark:bg-slate-900/80 dark:text-slate-200">
                        {selectedClass.label}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                        {material.title}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {material.subtitle}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
