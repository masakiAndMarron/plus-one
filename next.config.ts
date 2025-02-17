import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/((?!maintenance.html$).*$)",
        destination: "/maintenance.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
