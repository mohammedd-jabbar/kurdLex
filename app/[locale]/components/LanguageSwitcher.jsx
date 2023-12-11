"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [language, setLanguage] = useState("en");

  const handleChange = (e) => {
    setLanguage(e.target.value);
    router.push(e.target.value);
  };

  return (
    <select value={language} onChange={handleChange}>
      <option value="en">English</option>
      <option value="ku">Kurdish</option>
    </select>
  );
}
