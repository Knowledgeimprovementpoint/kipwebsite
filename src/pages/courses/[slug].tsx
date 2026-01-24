import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import { Button } from "@/components/UI/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/card";
import { getCourseBySlug } from "@/utils/courses";

export default function CourseDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (typeof slug !== "string") {
    return null;
  }

  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <>
        <Head>
          <title>Course not found — KIP</title>
          <meta name="robots" content="noindex" />
        </Head>
        <section className="space-y-4">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Course not found</h1>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            The course you&apos;re looking for does not exist or may have been moved.
          </p>
          <Button asChild variant="outline">
            <Link href="/courses">Back to courses</Link>
          </Button>
        </section>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{course.title} — KIP</title>
        <meta name="description" content={course.summary} />
      </Head>
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">{course.title}</h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {course.level} · {course.duration}
            </p>
          </div>
          <Button>Enroll</Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{course.description}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Curriculum</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {course.curriculum.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

