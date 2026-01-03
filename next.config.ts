import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['rahabsanat.ir','apika.ir'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
