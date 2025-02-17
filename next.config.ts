import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return process.env.MAINTENANCE_MODE === "true"
      ? [
          {
            source: "/((?!maintenance.html$).*$)",
            destination: "/maintenance.html",
            permanent: false,
          },
        ]
      : [];
  },
};

module.exports = {};

export default nextConfig;
