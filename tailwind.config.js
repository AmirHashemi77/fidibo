/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        iranYekan:['iranYekan', 'sans']
      },
      colors:{
        lightBlue:'#28C5CC',
        lightOrange:'#FFCD63',
        lightBlue2:'#E9F8FA',
        gray:{
          150:'#F0F0F0'
        },
        lightBrown:'#CFCFCF'
        
        
      },
      maxWidth:{
        '2xs':'12rem'
      },
      fontSize:{
        '2xs':'0.5rem'
      }
      

      
    },
  },
  plugins: [],
}
