import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    NAME: process.env.NEXT_PUBLIC_NAME
  }
};

export default nextConfig;
