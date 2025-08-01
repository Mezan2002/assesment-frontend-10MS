"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

import MiniThumbnailController from "@/components/home/TopBanner/MiniThumbnailController";
import MediaPlayerIcon from "@/helpers/ui/customSVG/MediaPlayerIcon";
import { Media } from "@/types";
import YouTube, { YouTubeProps } from "react-youtube";

const ImageSlider = ({ trailerCardData }: { trailerCardData: Media[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoId, setVideoId] = useState<string | null>(null);

  const handleNext = () => {
    setVideoId(null);
    setCurrentIndex((prev) => (prev + 1) % trailerCardData.length);
  };

  const handlePrev = () => {
    setVideoId(null);
    setCurrentIndex((prev) =>
      prev === 0 ? trailerCardData.length - 1 : prev - 1
    );
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const handleVideoPlayer = (item: string) => {
    setVideoId(item);
  };

  const opts: YouTubeProps["opts"] = {
    height: "220",
    width: "390",
    playerVars: { autoplay: 1 },
  };

  return (
    <div>
      <div className="relative w-full h-[220px]">
        {videoId ? (
          <div>
            <YouTube videoId={videoId} opts={opts} />
          </div>
        ) : (
          <>
            {trailerCardData[currentIndex].resource_type === "video" && (
              <button
                onClick={() =>
                  handleVideoPlayer(
                    trailerCardData[currentIndex].resource_value
                  )
                }
              >
                <div className="absolute top-0 left-0 bg-black opacity-40 z-20 w-full h-full" />
                <span className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <MediaPlayerIcon />
                </span>
              </button>
            )}
            <Image
              src={
                trailerCardData[currentIndex].thumbnail_url ||
                trailerCardData[currentIndex].resource_value
              }
              alt={trailerCardData[currentIndex].name}
              fill
              className="object-fill"
            />
          </>
        )}

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100 z-50 cursor-pointer"
        >
          <ChevronLeft size={20} className="text-gray-400" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100 z-50 cursor-pointer"
        >
          <ChevronRight size={20} className="text-gray-400" />
        </button>
      </div>
      <MiniThumbnailController
        trailerCardData={trailerCardData}
        currentIndex={currentIndex}
        handleSelect={handleSelect}
      />
    </div>
  );
};

export default ImageSlider;
