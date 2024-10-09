
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
      backgroundImage: {
        'main-black-bg': "url('/main-black-bg.png')",
        'ultiverse-bg': "url('/ultiverse-bg.png')",
      },
      backgroundSize :{
        'tiled':'1920px'
      },
      fontFamily: {
        terminus: ['var(--font-terminus)'],
        terminusBold : ['var(--font-terminus-700)']
      },
      cursor: {
        custom: 'url("/mouse-clicker.svg") 54 54, auto',
      },
      
    },
    
  },
  plugins: [],
};
export default config;
