/** @type {import('next').NextConfig} */
const repo = "3D-Portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,

  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
