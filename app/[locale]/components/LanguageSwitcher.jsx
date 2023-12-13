"use client";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathName = usePathname();
  // remove (/) from the pathname
  const [language, setLanguage] = useState(pathName.substring(1));
  const t = useTranslations("Index");

  const handleChange = (e) => {
    e.preventDefault();
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    router.push(selectedLanguage);
  };

  return (
    <select
      value={language}
      onChange={handleChange}
      className="bg-white border border-black/30 text-gray-900 text-sm rounded-lg py-2 px-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
    >
      <option value="en">{t("English")}</option>
      <option value="ku">{t("Kurdish")}</option>
    </select>
  );
}
