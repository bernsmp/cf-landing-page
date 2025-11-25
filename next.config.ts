import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/in-action',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/in-action/:slug',
        destination: '/articles',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
