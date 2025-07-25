import { Data } from "@/types";
import TopBanner from "./TopBanner";

const CourseDetails = ({ data }: { data: Data }) => {
  const TopBannerContent = {
    title: data.title || "",
    description: data.description || "",
  };

  return (
    <div>
      <TopBanner
        topBannerContent={TopBannerContent}
        trailerCardContent={data.media}
        checklistContent={data.checklist}
      />
    </div>
  );
};

export default CourseDetails;
