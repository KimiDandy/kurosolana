/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadow-11': 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      },
      backgroundImage: {
        'fixed-bg': "url('cat/six.jpg')",
      },
      animation: {
        'bounce-up-down': 'bounceUpDown 3s infinite',
        'bounce-up-down-slow': 'bounceUpDown 5s infinite',
        'bounce-up-down-fast': 'bounceUpDown 2s infinite',
      },
      keyframes: {
        bounceUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      textStrokeWidth: {
        'DEFAULT': '1px',
        '2': '2px',
      },
      textStrokeColor: {
        'DEFAULT': '#000',
        'white': '#fff',
      },
      fontFamily: {
        'poppins' : 'Slackey, sans-serif',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '2px black',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke': '1px white',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}