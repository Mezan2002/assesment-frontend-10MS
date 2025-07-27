import { API_HEADERS } from "@/lib/constants";
import { ApiResponse } from "@/types";

export async function getCourseData(lang: string = "en"): Promise<ApiResponse> {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}?lang=${lang}`;
  const response = await fetch(apiUrl, {
    headers: API_HEADERS,
    // next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
