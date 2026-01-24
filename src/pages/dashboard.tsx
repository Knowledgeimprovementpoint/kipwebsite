import Head from "next/head";

import { RequireAuth } from "@/components/Auth/RequireAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/card";
import { useAuthStore } from "@/store/authStore";
import { courses } from "@/utils/courses";

export default function DashboardPage() {
  const user = useAuthStore((s) => s.user);

  return (
    <RequireAuth>
      <Head>
        <title>Dashboard — KIP</title>
        <meta
          name="description"
          content="Your KIP dashboard with a quick overview of enrolled courses and recommended next steps."
        />
      </Head>
      <section className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
            Welcome{user ? `, ${user.name}` : ""}.
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-700 dark:text-slate-300">
            This is your starting point in KIP. Explore recommended courses and return here to track your learning.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Next recommended courses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {courses.map((course) => (
                <div key={course.slug} className="text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-medium text-slate-900 dark:text-slate-50">{course.title}</span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {" "}
                    · {course.level} · {course.duration}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Progress snapshot</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                This demo instance does not yet track detailed progress, but you can use the catalog to explore and
                enroll in relevant courses.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </RequireAuth>
  );
}

