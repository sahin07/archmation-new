import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "archmation.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/case-studies/:slug",
        destination: "/blogs/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
