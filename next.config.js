/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Production export goes to docs/ (served by GitHub Pages); dev uses .next so
  // `next dev` doesn't wipe the published site
  distDir: process.env.NODE_ENV === "production" ? "docs" : ".next",
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
