import CourseDetails from "@/components/home";
import { getCourseData } from "@/lib/getCourseData";
import { Data } from "@/types";

interface Props {
  searchParams: Promise<{ lang?: string }>;
}

export default async function HomePage({ searchParams }: Props) {
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
    return <div className="text-center">Loading...</div>;
  }

  return (
    <main>
      <CourseDetails data={data} />
    </main>
  );
}
