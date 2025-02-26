import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        questrial: "var(--font-questrial)",
      },
      colors: {
        white: "#ffffff",
        "white-1": "#E9E9EA",
        "white-2": "#F5F5F7",
        dark: "#02021E",
        "dark-1": "#02021E",
        "dark-2": "#150E59",
        blue: "#534CB2",
        "blue-1": "#3827C7",
        "dark-blue-1": "#2C277D",
        "dark-blue-2": "#534CB2",
        yellow: "#CB9E5D",
        "yellow-1": "#FBC349",
        "yellow-2": "#FFE6A1",
        "purple-1": "#9C69F2",
        "purple-2": "#F8D8FB",
      },
      animation: {
        "text-gradient": "text-gradient 6s ease infinite alternate",
        "bg-shine": "bg-shine 2.1s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "float-ease": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "text-gradient": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        "bg-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  darkMode: ["class", "class"],
  plugins: [heroui(), require("tailwindcss-animate")],
} satisfies Config;
