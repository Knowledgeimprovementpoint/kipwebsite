import { Head, Html, Main, NextScript } from "next/document";

const themeInitScript = `
(function() {
  try {
    var theme = localStorage.getItem("kip_theme");
    if (!theme) return;
    var root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  } catch (e) {}
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

