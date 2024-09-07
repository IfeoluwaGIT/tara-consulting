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
        'header-blue': '#0d0c22', 
      },
      height: {
        '680': '680px',
      },
      width: {
        '1440': '1440px',
      },
    },
  },
  plugins: [],
};
