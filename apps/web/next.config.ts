import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["@applicantos/shared", "@applicantos/types", "@applicantos/ui"],
};

export default nextConfig;
