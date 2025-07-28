"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import LanguageSwitchIcon from "@/helpers/ui/customSVG/LanguageSwitchIcon";

const TopNav = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLang = searchParams.get("lang") || "en";

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "bn" : "en";
    router.push(`/?lang=${newLang}`);
  };

  return (
    <nav className="py-5 2xl:px-[370px] flex items-center justify-between">
      <Image
        src="/images/10mslogo-svg.svg"
        alt="10 minutes school logo"
        width={100}
        height={27}
        className="h-[27px] w-[100px]"
      />
      <button onClick={toggleLanguage}>
        <span className="hidden cursor-pointer items-center gap-1 rounded border border-gray-300 px-2 py-[2px] hover:bg-slate-50 md:flex">
          <LanguageSwitchIcon />
          <span>{currentLang === "en" ? "বাং" : "EN"}</span>
        </span>
      </button>
    </nav>
  );
};

export default TopNav;
