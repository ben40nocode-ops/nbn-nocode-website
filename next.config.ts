import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "nbn-nocode.fr" }],
        destination: "https://www.nbn-ia.fr/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nbn-nocode.fr" }],
        destination: "https://www.nbn-ia.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
