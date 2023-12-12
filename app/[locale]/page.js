"use client";
import React from "react";
import ThemeSwitch from "./components/DarkMode";
import Main from "./components/Main";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";

export default function Home({ params: { lang } }) {
  const [isNavbarScroll, setIsNavbarScroll] = React.useState(false);
  const t = useTranslations("Index");
  const locale = useLocale();

  // navbar animation
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setIsNavbarScroll(true);
      } else {
        setIsNavbarScroll(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <main className="" dir={locale === "en" ? "ltr" : "rtl"}>
      <header
        className={`sticky z-50 top-0  ${
          isNavbarScroll &&
          "transition-all duration-300 ease-in-out bg-white shadow-md dark:bg-black bg-opacity-50 backdrop-blur-[3rem] dark:bg-opacity-50 dark:backdrop-blur-[3rem]"
        }`}
      >
        <nav
          className={`max-w-6xl mx-auto px-2 py-3 flex sm:flex-row items-center justify-between dark:border-white dark:text-white dark:border-white/20 `}
        >
          <div className="font-semibold text-xl md:text-2xl">
            <a href="/">{t("KurdLex")}</a>
          </div>

          <div className="flex items-center justify-between space-x-4 sm:space-x-6 rtl:space-x-reverse">
            <ThemeSwitch />
            <LanguageSwitcher />
          </div>
        </nav>
      </header>
      <Main />
    </main>
  );
}
