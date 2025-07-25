import Image from "next/image";

import TrailerCard from "@/components/home/TrailerCard";

import { Media } from "@/types";

interface TopBannerProps {
  topBannerContent: {
    title: string;
    description: string;
  };
  trailerCardContent: Media[];
}

const TopBanner = ({
  topBannerContent,
  trailerCardContent,
}: TopBannerProps) => {
  const { title, description } = topBannerContent;

  return (
    <div
      style={{
        backgroundImage:
          'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-[300px] md:min-h-[300px] relative"
    >
      <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
        <div className="order-1 flex flex-col justify-center flex-1 md:order-1">
          <div className="w-1/2 mx-auto">
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
        </div>
        <TrailerCard trailerCardData={trailerCardContent} />
      </div>
    </div>
  );
};

export default TopBanner;
