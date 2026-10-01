"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 bg-black/50 text-xs font-bold text-white hover:bg-white/10 transition-colors"
      title="Toggle Language"
    >
      {language === "id" ? "ID" : "EN"}
    </button>
  );
}
