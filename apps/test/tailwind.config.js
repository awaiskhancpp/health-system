/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in the src directory
    "./public/index.html",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}" // Include your HTML file if applicable
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
