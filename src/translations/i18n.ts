import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/translations/en.json";
import hi from "@/translations/hi.json";

export const supportedLanguages = ["en", "hi"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const STORAGE_KEY = "kip_lang";

function getInitialLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "hi" || saved === "en") return saved;
  return "en";
}

export function setLanguage(lang: SupportedLanguage) {
  i18n.changeLanguage(lang);
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      hi: { translation: hi }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });
}

// On client, set to preferred language once.
if (typeof window !== "undefined") {
  const initial = getInitialLanguage();
  if (i18n.language !== initial) setLanguage(initial);
}

export default i18n;

