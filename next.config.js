/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "images.pexels.com",
      },
      {
        hostname: "images.ctfassets.net",
      },
    ],
  },
};
