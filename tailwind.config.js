/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'sm': '576px',

      'md': '767px',

      'lg': '1023px',

      'xl': '1439px'
    },
    extend: {
      keyframes: {
        slide: {
          '0%': { left: '-100%' },
          '100%': { left: '0' },
        },
        reveal: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' }
        }
      },
    },
  },
  plugins: [],
}

