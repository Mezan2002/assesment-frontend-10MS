import CourseDetails from "@/components/home";
import SEOHead from "@/components/SEOHead";

import { ApiResponse, Data } from "@/types";

interface Props {
  searchParams: { lang?: string };
}

export default async function ProductPage({ searchParams }: Props) {
  const lang = searchParams?.lang || "en";
  let data: Data | null = null;
  let error: string | null = null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}?lang=${lang}`,
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          accept: "application/json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const apiResponse: ApiResponse = await response.json();
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

  const SEOData = {
    title: data.seo.title || "IELTS Course by Munzereen Shahid",
    description: data.seo.description || "IELTS Course by Munzereen Shahid",
    keywords: data.seo.keywords || ["IELTS, course, Munzereen Shahid"],
  };

  return (
    <main>
      {/* SEO Head */}
      <SEOHead SEOData={SEOData} />

      {/* course details */}
      <CourseDetails data={data} />
    </main>
  );
}

// generateMetadata function to fetch SEO data
export async function generateMetadata({ searchParams }: Props) {
  const lang = searchParams.lang || "en";
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}?lang=${lang}`,
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch metadata");
    }

    const apiResponse: ApiResponse = await response.json();
    const data = apiResponse.data;

    return {
      title: data.seo.title || "IELTS Course by Munzereen Shahid",
      description: data.seo.description || "IELTS Course by Munzereen Shahid",
      keywords: data.seo.keywords?.forEach((keyword) => keyword) || [
        "IELTS, course, Munzereen Shahid",
      ],
    };
  } catch (error) {
    return {
      title: "IELTS Course by Munzereen Shahid",
      description: "Learn IELTS with expert guidance from Munzereen Shahid.",
      keywords: "IELTS, course, Munzereen Shahid",
    };
  }
}
