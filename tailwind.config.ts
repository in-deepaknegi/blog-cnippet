import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/[slug]/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
    "./blog/**/*.{js,ts,jsx,tsx,mdx}",   
  ],
  plugins: [require('tailwind-highlightjs')],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  theme: {
    hljs: {
      theme: 'github-dark',
    },
  },
};
export default config;
