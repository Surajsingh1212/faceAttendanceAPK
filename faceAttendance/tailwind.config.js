/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['sans-serif','Helvetica', 'Arial'],
      },
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },
    },
  },
  plugins: [],
}

