/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
    // unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/ballotize",
        destination: "/scalevote",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
