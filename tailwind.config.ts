import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bricolage Grotesque", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#f2ede8",
          muted: "#8a8278",
          faint: "#3a3530",
        },
        canvas: {
          DEFAULT: "#0d0b09",
          raised: "#141210",
          card: "#1a1714",
        },
        accent: {
          DEFAULT: "#9333ea",
          dim: "#4c1d95",
          glow: "#c084fc",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "25%": { transform: "translateY(-20px) translateX(10px)" },
          "50%": { transform: "translateY(-10px) translateX(-5px)" },
          "75%": { transform: "translateY(-25px) translateX(5px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        blink: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
