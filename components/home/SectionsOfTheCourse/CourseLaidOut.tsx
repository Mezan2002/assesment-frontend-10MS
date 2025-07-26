import { Section } from "@/types";
import Image from "next/image";

const CourseLaidOut = ({
  courseLaidOutData,
}: {
  courseLaidOutData: Section;
}) => {
  return (
    <div className="mb-16 grid grid-cols-1 gap-4 rounded-lg border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
      {courseLaidOutData.values.map((item) => (
        <div key={item.id} className="flex gap-3 m-1">
          <Image
            src={item.icon || ""}
            alt={item.title || "Feature image"}
            width={36}
            height={36}
            className="size-9"
          />
          <div className="flex flex-col flex-1 gap-2">
            <h6 className="text-[18px] font-[500px] leading-[26px] text-white">
              {item.title || "Feature Title"}
            </h6>
            <p className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
              {item.subtitle || "Feature Subtitle"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseLaidOut;
