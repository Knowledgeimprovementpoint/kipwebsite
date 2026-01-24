import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AuthProvider } from "@/components/Auth/AuthProvider";
import { AppLayout } from "@/components/AppLayout/AppLayout";
import { I18nProvider } from "@/translations/I18nProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Knowledge Improvement Point (KIP) — an educational platform to enhance company knowledge through courses and resources."
        />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <I18nProvider>
        <AuthProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </AuthProvider>
      </I18nProvider>
    </>
  );
}
