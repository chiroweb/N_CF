/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chiro-web.s3.ap-northeast-2.amazonaws.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1600, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 828, 1024],
  },
};

export default nextConfig;
