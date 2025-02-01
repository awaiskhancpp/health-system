/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include files in your app
    "../../packages/ui/**/*.{js,ts,jsx,tsx}", // Include files in the shared UI package
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};