import { DEFAULT_SEO } from "@/lib/constants";
import { getCourseData } from "@/lib/getCourseData";

export async function generateDynamicMetadata(lang: string = "en") {
  try {
    const apiResponse = await getCourseData(lang);
    const data = apiResponse.data;

    return {
      title: data.seo.title || DEFAULT_SEO.title,
      description: data.seo.description || DEFAULT_SEO.description,
      keywords: data.seo.keywords || DEFAULT_SEO.keywords,
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return DEFAULT_SEO;
  }
}
