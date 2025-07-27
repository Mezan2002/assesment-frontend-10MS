"use client";

import Button from "@/components/common-components/Button";
import Checklists from "@/components/home/TopBanner/Checklists";
import ImageSlider from "@/components/home/TopBanner/ImageSlider";
import TelephoneIcon from "@/helpers/ui/customSVG/TelephoneIcon";
import { Checklist, Media } from "@/types";

interface TrailerCardProps {
  isCrossedScrollLimit: boolean;
  trailerCardData: Media[];
  checklistContent: Checklist[];
}

const TrailerCard = ({
  isCrossedScrollLimit,
  trailerCardData,
  checklistContent,
}: TrailerCardProps) => {
  return (
    <div className={isCrossedScrollLimit ? "animate-pop-out" : ""}>
      <div className="w-full md:w-[330px] lg:w-[400px] bg-white overflow-hidden p-1 border border-gray-300">
        {!isCrossedScrollLimit && (
          <ImageSlider trailerCardData={trailerCardData} />
        )}
        <div className="flex items-center justify-between md:flex-col md:items-start flex-1">
          <div className="p-4 w-full">
            <div className="md:mb-3">
              <h5 className="inline-block text-2xl font-semibold">৳3850</h5>
              <span className="inline-flex">
                <del className="ml-2 text-base font-normal md:text-xl">
                  ৳5000
                </del>
              </span>
            </div>
            <Button />
          </div>
        </div>
        <Checklists checklistContent={checklistContent} />
      </div>
      <span className="hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col justify-between lg:flex lg:flex-row">
        কোর্সটি সম্পর্কে বিস্তারিত জানতে
        <span className="flex items-start gap-1.5 text-primary-light">
          <TelephoneIcon />
          <span className="underline -mt-0.5">ফোন করুন (16910)</span>
        </span>
      </span>
    </div>
  );
};

export default TrailerCard;
