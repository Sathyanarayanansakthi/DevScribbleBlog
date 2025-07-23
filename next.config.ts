import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"], // ✅ Allow this external image host
  },
};

export default nextConfig;
