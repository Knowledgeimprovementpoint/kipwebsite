import { type PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@/components/Auth/AuthProvider";

export function RequireAuth({ children }: PropsWithChildren) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      void router.replace(`/auth/login?next=${encodeURIComponent(router.asPath)}`);
    }
  }, [router, user]);

  if (!user) return null;
  return <>{children}</>;
}

