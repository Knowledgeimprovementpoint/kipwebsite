import Link from "next/link";
import { useTranslation } from "react-i18next";
import { GraduationCap } from "lucide-react";

import { Button } from "@/components/UI/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/UI/card";
import type { Course } from "@/utils/courses";

export function CourseCard({ course }: { course: Course }) {
  const { t } = useTranslation();

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex flex-row items-start gap-3">
        <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200">
          <GraduationCap className="h-4 w-4" />
        </div>
        <div>
          <CardTitle>{course.title}</CardTitle>
          <CardDescription>
            {course.level} · {course.duration}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-slate-700 dark:text-slate-300">{course.summary}</p>
      </CardContent>
      <CardFooter className="mt-auto justify-between gap-3">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/courses/${course.slug}`}>{t("courses.viewDetails")}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

