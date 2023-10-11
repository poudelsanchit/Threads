/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['class'],

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark' :'#101010',
        'light':'#ffffff',
        'secondary':'#777777',
        'border':'#323333',
       'placeholder': '#777777' ,
       'lines':'#323333'
      }
    },
  },
  plugins: [],
}