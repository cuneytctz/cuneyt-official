"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import tr from "../locales/tr";
import ru from "../locales/ru";
import kz from "../locales/kz";
import en from "../locales/en";

const languages = { tr, ru, kz, en };
export type Language = keyof typeof languages;

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof tr;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("tr");

  useEffect(() => {
    const saved = window.localStorage.getItem("site-language") as Language | null;
    // Restore the visitor's last language after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved && saved in languages) setLanguageState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "kz" ? "kk" : language;
    window.localStorage.setItem("site-language", language);
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);

  return (
    <LanguageContext.Provider
  value={{
    language,
    setLanguage,
    t: languages[language] as typeof tr,
  }}
>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
