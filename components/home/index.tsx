import SectionsOfTheCourse from "@/components/home/SectionsOfTheCourse/index";

import { Data } from "@/types";

const CourseDetails = ({ data }: { data: Data }) => {
  const neededSections = [
    "instructors",
    "features",
    "pointers",
    "feature_explanations",
    "about",
  ];

  const filteredSections = data.sections.filter((item) =>
    neededSections.includes(item.type)
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
