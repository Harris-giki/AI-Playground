import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "standalone",
  // Vyrothon and AI Playground live in the same parent workspace, so Next's root
  // inference picks the wrong package-lock. Pin the turbopack root to this app.
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/tier-1-challenge",
        destination: "/tier-1",
        permanent: true,
      },
      {
        source: "/tier-1-2",
        destination: "/tier-1",
        permanent: true,
      },
      {
        source: "/tier-3",
        destination: "/tier-2",
        permanent: false,
      },
      {
        source: "/tier-2-3",
        destination: "/tier-2",
        permanent: true,
      },
      {
        source: "/apply",
        // Placeholder Google Form — replace with the real form URL when ready.
        destination: "https://forms.gle/your-form-id",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
