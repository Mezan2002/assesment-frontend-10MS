"use client";

import { Media } from "@/types";
import ImageSlider from "./ImageSlider";

const TrailerCard = ({ trailerCardData }: { trailerCardData: Media[] }) => {
  return (
    <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[80px] md:absolute overflow-hidden shadow-lg p-2">
      <ImageSlider trailerCardData={trailerCardData} />
    </div>
  );
};

export default TrailerCard;
