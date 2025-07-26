import { Section } from "@/types";
import CourseDetails from "./CourseDetails";
import CourseInstructor from "./CourseInstructor";
import CourseLaidOut from "./CourseLaidOut";
import WhatYouWillLearn from "./WhatYouWillLearn";

type SectionsOfTheCourseProps = {
  context: string;
  data: Section;
};

const SectionsOfTheCourse = ({
  context = "",
  data,
}: SectionsOfTheCourseProps) => {
  return (
    <section className="px-[370px] py-5">
      <h6 className="text-gray-900 text-2xl font-semibold mb-5">
        {data.name || "Details About The Course"}
      </h6>
      <div className="max-w-7/12 h-max">
        {context === "instructors" && (
          <CourseInstructor courseInstructorData={data} />
        )}

        {context === "features" && <CourseLaidOut courseLaidOutData={data} />}

        {context === "pointers" && (
          <WhatYouWillLearn whatYouWillLearnData={data} />
        )}

        {context === "about" && <CourseDetails courseDetailsData={data} />}
      </div>
    </section>
  );
};

export default SectionsOfTheCourse;
