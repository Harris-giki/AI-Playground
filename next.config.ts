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
        source: "/apply",
        // Placeholder Google Form — replace with the real form URL when ready.
        destination: "https://forms.gle/your-form-id",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
