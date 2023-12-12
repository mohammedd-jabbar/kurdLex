"use client";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathName = usePathname();
  const [language, setLanguage] = useState(pathName);
  const t = useTranslations("Index");

  const handleChangeEN = (e) => {
    setLanguage("en");
    router.push("en");
  };
  const handleChangeKU = (e) => {
    setLanguage("ku");
    router.push("ku");
  };

  return (
    <select
      value={language}
      className="bg-white border border-black/30 text-gray-900 text-sm rounded-lg py-2 px-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
    >
      <option value="en" onClick={handleChangeEN}>
        {t("English")}
      </option>
      <option value="ku" onClick={handleChangeKU}>
        {t("Kurdish")}
      </option>
    </select>
  );
}
