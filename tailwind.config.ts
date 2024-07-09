import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#B84592',
        secondary: '#F8F9FA',
        aboutColor: '#FBF6F9'
      },
      screens: {
        'xs': '425px'
        // => @media (min-width: 425px)
      }
    },
  },
  plugins: [],
};
export default config;
