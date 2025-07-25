import { Media } from "@/types";
import Image from "next/image";
import { useEffect, useRef } from "react";

const MiniThumbnailController = ({
  trailerCardData,
  currentIndex,
  handleSelect,
}: {
  trailerCardData: Media[];
  currentIndex: number;
  handleSelect: (index: number) => void;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const itemWidth = 96 + 8;
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollPosition =
        currentIndex * itemWidth - containerWidth / 2 + itemWidth / 2;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div
      ref={scrollContainerRef}
      className="p-2 overflow-x-auto hide-scrollbar scrollbar-thin w-full"
    >
      <div className="flex gap-2 flex-nowrap w-max">
        {trailerCardData.map((data, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`w-20 h-10 rounded-md overflow-hidden cursor-pointer border-2 relative ${
              index === currentIndex ? "border-green-600" : "border-transparent"
            }`}
          >
            <Image
              src={data.thumbnail_url || data.resource_value}
              alt={data.name}
              width={96}
              height={64}
              className="w-full h-full object-cover object-center"
            />
            {trailerCardData[currentIndex].resource_type === "video" && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer">
                <Image
                  src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                  alt="play button"
                  width={20}
                  height={20}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniThumbnailController;
