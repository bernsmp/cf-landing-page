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
  async rewrites() {
    return [
      {
        source: '/sessions/rewrites-itself',
        destination: '/sessions/rewrites-itself.html',
      },
    ];
  },
};

export default nextConfig;
