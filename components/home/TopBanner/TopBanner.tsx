import Image from "next/image";

import { Checklist, Media } from "@/types";
import StickyTrailerCard from "./StickyTrailerCard";

interface TopBannerProps {
  topBannerContent: {
    title: string;
    description: string;
  };
  trailerCardContent: Media[];
  checklistContent: Checklist[];
}

const TopBanner = ({
  topBannerContent,
  trailerCardContent,
  checklistContent,
}: TopBannerProps) => {
  const { title, description } = topBannerContent;

  return (
    <section
      style={{
        backgroundImage:
          'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[300px]"
    >
      <div className="flex flex-col gap-4 md:flex-row md:gap-12 md:py-20 items-start px-[370px] relative">
        <div className="flex flex-col justify-center w-8/12">
          <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
            {title}
          </h1>
          <button className="flex flex-row flex-wrap gap-2 text-white">
            <Image
              src="/images/five_star_rating_image.jpeg"
              alt="Five start rating image"
              width={136}
              height={24}
              quality={100}
            />
            <span className="inline-block text-sm md:text-base">
              (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
            </span>
          </button>
          <div
            className="text-gray-400 mt-2 text-md mr-28"
            style={{ overflow: "hidden", height: "auto", maskImage: "none" }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <StickyTrailerCard
          trailerCardData={trailerCardContent}
          checklistContent={checklistContent}
        />
      </div>
    </section>
  );
};

export default TopBanner;
