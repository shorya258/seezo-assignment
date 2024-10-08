/** @type {import('tailwindcss').Config} */
module.exports = {
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
        colors: {
          customBlue: 'rgb(62, 58, 242)',
          customGrey: '#1F2937',
          assessmentBG:"#F2F4F6",
          customHoverGrey:"#374151",
          customYellow:"#f3c78e",
          customDarkYellow:"#FBA918",
          customActiveBlue:"#2196f3",
          modalHeaderColor:"#f8f9fa"
        },
      },
    },
  },
  plugins: [],
};
