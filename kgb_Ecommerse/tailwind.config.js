/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-pink-1': "#fae9e6",
        'light-pink-2': "#fde0e0",
        'light-rose': "#eec6c6",
      }
    },
  },
  plugins: [],
};
