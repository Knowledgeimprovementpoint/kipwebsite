import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import offeringsData from "@/utils/offerings.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/card";

type Params = {
  classSlug: string;
  materialSlug: string;
};

type MaterialPageProps = {
  classLabel: string;
  classSlug: string;
  materialTitle: string;
  materialSlug: string;
};

export default function MaterialPage({
  classLabel,
  materialTitle
}: MaterialPageProps) {
  const platformName = "Knowledge Improvement Point (KIP)";
  const title = `${materialTitle} for ${classLabel} | ${platformName}`;
  const description = `${materialTitle} for ${classLabel} to boost exam preparation with focused study support.`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <section className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
            {materialTitle} — {classLabel}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-700 dark:text-slate-300">
            Use this material as part of a consistent, balanced revision plan. Combine it with practice, feedback, and
            healthy breaks for best results.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Content coming soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              This demo route showcases how class- and material-specific SEO-friendly pages can be generated. You can
              now wire this page to your actual PDFs, videos, or interactive content for {classLabel}.
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths: { params: Params }[] = [];

  for (const klass of offeringsData.classes) {
    for (const material of offeringsData.materials) {
      paths.push({
        params: {
          classSlug: klass.slug,
          materialSlug: material.slug
        }
      });
    }
  }

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<MaterialPageProps, Params> = async (context) => {
  const { params } = context;
  if (!params) {
    return { notFound: true };
  }

  const klass = offeringsData.classes.find((c) => c.slug === params.classSlug);
  const material = offeringsData.materials.find((m) => m.slug === params.materialSlug);

  if (!klass || !material) {
    return { notFound: true };
  }

  return {
    props: {
      classLabel: klass.label,
      classSlug: klass.slug,
      materialTitle: material.title,
      materialSlug: material.slug
    }
  };
};

