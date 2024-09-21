/** @type {import('next').NextConfig} */
const nextConfig = {
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
