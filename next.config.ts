import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Security + performance headers
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        // Security
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        // DNS prefetch for external resources
        { key: "X-DNS-Prefetch-Control", value: "on" },
      ],
    },
    {
      // Cache static assets aggressively (images, fonts, video)
      source: "/:path*.(webp|png|jpg|jpeg|svg|ico|mp4|woff2|woff|ttf|eot)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      // Cache CSS and JS with revalidation
      source: "/:path*.(js|css)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      // Cache PDF portfolio
      source: "/Portfolio/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=604800, stale-while-revalidate=86400",
        },
      ],
    },
  ],
};

export default nextConfig;
