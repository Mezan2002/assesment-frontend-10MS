import { Section } from "@/types";
import Image from "next/image";
import { ChevronRight } from "react-feather";

const CourseInstructor = ({
  courseInstructorData,
}: {
  courseInstructorData: Section;
}) => {
  const { values: instructorsData } = courseInstructorData;

  return (
    <div className="px-5 pt-5 pb-3 border border-gray-300 rounded-lg">
      <div className="flex items-center gap-4 relative">
        <Image
          src={instructorsData[0].image || ""}
          alt={instructorsData[0].name || "Instructor Image"}
          width={73}
          height={73}
          className="rounded-full -mt-5"
        />
        <div>
          <h5 className="text-gray-900 text-lg flex items-center gap-1.5 hover:text-primary cursor-pointer absolute">
            {instructorsData[0].name || "Instructor Name"}{" "}
            <ChevronRight className="text-gray-600 size-4" />
          </h5>
          <div
            className="text-gray-900 mt-7 text-sm"
            style={{ overflow: "hidden", height: "auto", maskImage: "none" }}
            dangerouslySetInnerHTML={{
              __html: instructorsData[0].description || "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;
