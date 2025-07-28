"use client";

import TrailerCard from "@/components/home/TopBanner/TrailerCard";
import { Checklist, Media } from "@/types";
import { useEffect, useRef, useState } from "react";

interface StickyTrailerCardProps {
  trailerCardData: Media[];
  checklistContent: Checklist[];
  buttonText: string;
}

const StickyTrailerCard = ({
  trailerCardData,
  checklistContent,
  buttonText,
}: StickyTrailerCardProps) => {
  const trailerCardRef = useRef<HTMLDivElement>(null);
  const [isCrossedScrollLimit, setIsCrossedScrollLimit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!trailerCardRef.current) return;

      const vh90 = window.innerHeight * 0.9;

      if (window.scrollY >= vh90) {
        setIsCrossedScrollLimit(true);
      } else {
        setIsCrossedScrollLimit(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={trailerCardRef}
      className={
        isCrossedScrollLimit
          ? "fixed top-5 xl:right-[20%] z-50"
          : "absolute top-[20%] right-5 z-50"
      }
    >
      <TrailerCard
        buttonText={buttonText}
        isCrossedScrollLimit={isCrossedScrollLimit}
        trailerCardData={trailerCardData}
        checklistContent={checklistContent}
      />
    </div>
  );
};

export default StickyTrailerCard;
