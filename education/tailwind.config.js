/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm':'576px',
      'md':'768px',
      'lg':'920px',
      'xl':'1198px',
      '2xl':'1536px',

    },
    extend: {
      fontFamily:{
        'poppins':['Poppins'],
        'roboto':['Roboto'],
        'lora':['Lora']
      },

      colors:{
        primary:{
          light:'#0174BE',
          dark:'#0C356A'
        },
        second:{

          light:'#F1B626',
          dark:'#FFF0CE'

        }
      }
    },
  },
  plugins: [],
}

