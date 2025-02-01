import type { Config } from "tailwindcss";
import baseConfig from "@repo/tailwind-config";

const config: Config = {
  presets: [baseConfig as Config], // ✅ Explicitly cast to avoid type issues
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
      },
    },
  },
};

export default config;
