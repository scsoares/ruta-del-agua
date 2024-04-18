/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'sm': '600px', //breakpoint for large smartphones and small tablets (extracted from W3 Schools)

      'md': '768px', //breakpoint for medium to large tablets (extracted from W3 Schools)

      'lg': '992px', // breakpoint for large devices (extracted from W3 Schools)

      'xl': '1200px' // breakpoint for extra large devices (extracted from W3 Schools)
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

