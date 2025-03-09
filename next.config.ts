import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    NAME: process.env.NEXT_PUBLIC_NAME
  },

  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
