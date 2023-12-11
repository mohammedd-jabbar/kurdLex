"use client";
import React from "react";
import ThemeSwitch from "./components/DarkMode";
import Main from "./components/Main";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home({ params: { lang } }) {
  const [isNavbarScroll, setIsNavbarScroll] = React.useState(false);

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
    <main className="">
      {/* If go down */}
      <header
        className={`sticky z-50 top-0  ${
          isNavbarScroll &&
          "transition-all duration-300 ease-in-out bg-white shadow-md dark:bg-black bg-opacity-50 backdrop-blur-[3rem] dark:bg-opacity-50 dark:backdrop-blur-[3rem]"
        }`}
      >
        <nav
          className={`max-w-6xl mx-auto px-2 py-3 flex sm:flex-row items-center justify-between dark:border-white dark:text-white dark:border-white/20 `}
        >
          <div className="font-semibold text-xl md:text-2xl">KurdLex</div>

          <ThemeSwitch />
        </nav>
      </header>
      <Main />
    </main>
  );
}
