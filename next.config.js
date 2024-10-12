/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
    // unoptimized: true,
  },
  transpilePackages: ["three"],
};

module.exports = nextConfig;
