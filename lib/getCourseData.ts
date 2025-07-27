import { API_HEADERS } from "@/lib/constants";
import { ApiResponse } from "@/types";

export async function getCourseData(lang: string = "en"): Promise<ApiResponse> {
  const baseApiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course";
  const apiUrl = `${baseApiUrl}?lang=${lang}`;
  const response = await fetch(apiUrl, {
    headers: API_HEADERS,
    // next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
