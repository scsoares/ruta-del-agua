/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',

      'md': '960px',

      'lg': '1439px',
    },
    extend: {},
  },
  plugins: [],
}

