/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-blue': "#61DAFB",
        'dark-gray': "#21222A",
        'mid-gray': "#282D35",
        'mid-light-gray': "#2E2F37"
      },
    },
  },
  plugins: [],
}

