import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Enable static export so GitHub Pages can serve the site
  output: "export",
  // GitHub Pages project site base path
  basePath: isProd ? "/bestbuy" : undefined,
  assetPrefix: isProd ? "/bestbuy/" : undefined,
  images: {
    // Required for static export when using the Image component
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
