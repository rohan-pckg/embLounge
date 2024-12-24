/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["your-cursive-font", "cursive"], // Replace 'your-cursive-font' with your chosen font
      },
    },
  },
  plugins: [],
};
