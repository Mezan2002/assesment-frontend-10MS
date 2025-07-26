import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: {
    domains: ["s3.ap-southeast-1.amazonaws.com", "cdn.10minuteschool.com"],
  },
};

export default nextConfig;
