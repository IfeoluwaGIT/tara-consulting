/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite', // Adjust speed by changing '30s'
      },
      colors: {
        'header-blue': '#0d0c22', 
        'header-peach': '#FFEBB7',
        'text-color': '#000080',
        'button-hover': '#F76C5E',
        'border-color': '#4E4E4E',
      },
      height: {
        '680': '680px',
      },
      width: {
        '1440': '1440px',
      },
      backgroundImage: {
        'custom-bg': "url('https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.pause-animation': {
          'animation-play-state': 'paused',
        },
        '.running-animation': {
          'animation-play-state': 'running',
        },
      }, ['responsive', 'hover']);
    },
  ],
};
