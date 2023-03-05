/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        'sofia':['Sofia Sans', 'sans-serif'],
        'Berserker':['Berserker-Regular', 'sans-serif'],
        'Raleway':['Raleway', 'sans-serif'],
        'Montserrat':['Montserrat', 'sans-serif'],
        
        

        
    },
  },
  plugins: [],
}
}