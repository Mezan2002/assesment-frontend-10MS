import Loader from "@/components/common-components/Loader";
import CourseDetails from "@/components/home";
import TopBanner from "@/components/home/TopBanner/TopBanner";
import TopNav from "@/components/home/TopNav";
import { getCourseData } from "@/lib/getCourseData";
import { Data } from "@/types";

interface Props {
  searchParams: Promise<{ lang?: string }>;
}

export default async function ProductDetailsPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang || "en";

  let data: Data | null = null;
  let error: string | null = null;

  try {
    const apiResponse = await getCourseData(lang);
    data = apiResponse.data;
  } catch (err) {
    error = err instanceof Error ? err.message : "Unknown error";
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!data) {
    return <Loader />;
  }

  const TopBannerContent = {
    title: data.title || "",
    description: data.description || "",
  };

  return (
    <main>
      <div className="max-w-[1200px] mx-auto lg:px-5 xl:px-0">
        <TopNav />
      </div>
      <TopBanner
        topBannerContent={TopBannerContent}
        trailerCardContent={data.media}
        checklistContent={data.checklist}
        buttonText={data.cta_text.name}
      />
      <div className="max-w-[1200px] mx-auto lg:px-5 xl:px-0">
        <CourseDetails data={data} />
      </div>
    </main>
  );
}
