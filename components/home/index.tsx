import SectionsOfTheCourse from "@/components/home/SectionsOfTheCourse/index";
import TopBanner from "@/components/home/TopBanner/TopBanner";

import { Data } from "@/types";

const CourseDetails = ({ data }: { data: Data }) => {
  const TopBannerContent = {
    title: data.title || "",
    description: data.description || "",
  };

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
    <div>
      <TopBanner
        topBannerContent={TopBannerContent}
        trailerCardContent={data.media}
        checklistContent={data.checklist}
      />
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
    </div>
  );
};

export default CourseDetails;
