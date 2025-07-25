"use client";

import Button from "@/components/common-components/Button";
import Checklists from "@/components/home/Checklists";
import ImageSlider from "@/components/home/ImageSlider";

import { Checklist, Media } from "@/types";

const TrailerCard = ({
  trailerCardData,
  checklistContent,
}: {
  trailerCardData: Media[];
  checklistContent: Checklist[];
}) => {
  return (
    <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute overflow-hidden p-1 border border-gray-300">
      {/* image slider */}
      <ImageSlider trailerCardData={trailerCardData} />

      {/* CTA */}
      <div className="flex items-center justify-between md:flex-col md:items-start">
        <div className="p-4 w-full">
          <div className="md:mb-3">
            <h5 className="inline-block text-2xl font-semibold">৳3850</h5>
            <span className="infline-flex">
              <del className="ml-2 text-base font-normal md:text-xl">৳5000</del>
            </span>
          </div>
          <Button />
        </div>
      </div>
      {/* Checklists */}
      <Checklists checklistContent={checklistContent} />
    </div>
  );
};

export default TrailerCard;
