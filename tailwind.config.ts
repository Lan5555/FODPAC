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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        juniper:['Juniper','sans-serif'],
      },
      fontSize:{
        xxs:'10px',
        xls:'5px',
        xxls:'8px'
      },
      height:{
        xs:'0.1px'
      }
    },
  },
  plugins: [],
};
export default config;
