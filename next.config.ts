import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
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
      // Consolidate thin "ia-" stub pages into their richer canonical equivalents
      // (avoids doorway/duplicate-content penalty while preserving any existing backlinks)
      { source: "/automatisation-ia-bordeaux", destination: "/automatisation-bordeaux", permanent: true },
      { source: "/automatisation-ia-royan",    destination: "/automatisation-royan",    permanent: true },
      { source: "/automatisation-ia-arcachon", destination: "/automatisation-arcachon", permanent: true },
    ];
  },
};

export default nextConfig;
