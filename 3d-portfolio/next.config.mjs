/** @type {import('next').NextConfig} */
const repo = "3D-Portfolio";
const isGhPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,

  basePath: isGhPages ? `/${repo}` : "",
  assetPrefix: isGhPages ? `/${repo}/` : "",

  env: {
    NEXT_PUBLIC_BASE_PATH: isGhPages ? `/${repo}` : "",
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
