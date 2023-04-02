/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      bodyFont:['Poppins', 'sans-serif'],
      titleFont:['Montserrat', 'sans-serif'],
      colors: {
        bodyColor: '#040B14',
        lightTextColor: '#FFFFFF',
        headingTextColor: '#1E3B6C',
        boxBg: '#F9A826',
        designColor: '#149DDD',
      },
      boxShadow: {
       shadowOne:'10px 10px 19px #F9A826, -10px -10px 19px #F9A826' 
           }
    },
  },
  plugins: [],
}
