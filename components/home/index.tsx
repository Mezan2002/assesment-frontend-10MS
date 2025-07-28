import SectionsOfTheCourse from "@/components/home/SectionsOfTheCourse/index";
import { sectionsNeedToShow } from "@/lib/constants";

import { Data } from "@/types";

const CourseDetails = ({ data }: { data: Data }) => {
  const filteredSections = data.sections.filter((item) =>
    sectionsNeedToShow.includes(item.type)
  );

  return (
    <div className="mt-5">
      {filteredSections.map(
        (item) =>
          item && (
            <SectionsOfTheCourse
              key={item.name}
              context={item.type}
              data={item}
            />
          )
      )}
    </div>
  );
};

export default CourseDetails;
