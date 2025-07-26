"use client";

import { Section } from "@/types";
import { useState } from "react";
import { ChevronDown } from "react-feather";

const CourseDetails = ({
  courseDetailsData,
}: {
  courseDetailsData: Section;
}) => {
  // states
  const [openItems, setOpenItems] = useState<string[]>([]);

  // functions
  const toggleDropdown = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="px-6 py-2 border border-gray-300 rounded-lg">
      {courseDetailsData.values.map((item, index) => {
        const isLastIndex = index === courseDetailsData.values.length - 1;
        const isOpen = openItems.includes(item.id ?? "");

        return (
          <div
            key={item.id}
            className={`border-gray-300 py-3 ${
              isLastIndex ? "" : "border-b border-dashed"
            }`}
          >
            <div
              className="flex items-center justify-between py-3 cursor-pointer"
              onClick={() => toggleDropdown(item.id ?? "")}
            >
              <div
                className="font-medium"
                dangerouslySetInnerHTML={{ __html: item.title || "" }}
              />
              <ChevronDown
                className={`transition-transform duration-500 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {item.description && (
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                  maxHeight: isOpen ? "3000px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div
                  className="pb-4"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CourseDetails;
