import type { Config } from "tailwindcss";
import baseConfig from "@repo/tailwind-config"; // If you're using shared config

const config: Config = {
  presets: [baseConfig as Config],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "../../components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5733",
      },
    },
  },
  plugins: [],
};

export default config;
