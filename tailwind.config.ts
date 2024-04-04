import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg:  "url('/bg.jpg')",
        autumn:  "url('/autumn.jpg')",
        mountain:  "url('/mountain.jpg')",
        jungle:  "url('jungle.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
