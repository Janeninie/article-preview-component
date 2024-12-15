import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
          grayishBlue: "hsl(212, 23%, 69%)",
          lightGrayishBlue: "hsl(210, 46%, 95%)",
        },
      },
      animation: {
        up: "up 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
