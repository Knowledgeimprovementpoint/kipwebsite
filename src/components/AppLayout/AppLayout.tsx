import { type PropsWithChildren, useEffect } from "react";

import { Footer } from "@/components/AppLayout/Footer";
import { Header } from "@/components/AppLayout/Header";
import { initThemeFromStorage } from "@/store/themeStore";

export function AppLayout({ children }: PropsWithChildren) {
  useEffect(() => {
    initThemeFromStorage();
  }, []);

  return (
    <div className="min-h-dvh kip-page-shell">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
      <Footer />
    </div>
  );
}

