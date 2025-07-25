export interface Media {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface Seo {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface CtaText {
  name: string;
  value: string;
}

export interface SectionValue {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  checklist?: string[];
  file_type?: string;
  file_url?: string;
  video_thumbnail?: string;
  name?: string;
  short_description?: string;
  image?: string;
  slug?: string;
  has_instructor_page?: boolean;
  profile_image?: string;
  testimonial?: string;
  thumb?: string;
  video_type?: string;
  video_url?: string;
  background?: {
    image?: string;
    primary_color?: string;
    secondary_color?: string;
  };
  cta?: {
    clicked_url?: string;
    color?: string;
    text?: string;
  };
  description_color?: string;
  title_color?: string;
  top_left_icon_img?: string;
  background_color?: string;
  background_img?: string;
  checklist_text_color?: string;
  end_at?: string;
  start_at?: string;
  template?: string;
  text?: string;
}

export interface Section {
  type:
    | "bundle_items"
    | "offers"
    | "instructors"
    | "features"
    | "group_join_engagement"
    | "pointers"
    | "content_preview"
    | "about"
    | "feature_explanations"
    | "free_items"
    | "certificate"
    | "bundle_certificate"
    | "testimonials"
    | "requirements"
    | "how_to_pay"
    | "faq";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: SectionValue[];
}

export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: {
    cat_id: number;
    course_id: number;
    platform: string;
    skills_cat_id: number;
    slug: string;
  };
  start_at: string;
  media: Media[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: unknown[];
  delivery_method: string;
}

export interface ApiResponse {
  code: number;
  data: Data;
  error: unknown[];
  message: string;
  payload: unknown[];
  status_code: number;
}
