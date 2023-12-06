"use client";
import React from "react";
import ThemeSwitch from "./components/DarkMode";
import Main from "./components/Main";

export default function Home() {
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
          isNavbarScroll && "bg-white shadow-md"
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
