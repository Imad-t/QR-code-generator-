/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundSize: {
      '90%': '90%',
    },
    extend: {
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'],
      },
    },
    colors: {
      primary : '#3662E3',
      white : '#F2F5F9',
      bg : '#111729',
      gray : '#364153', 
      darkBlue : '#4e80ee33',
      input : '#030617',
    }
  },
  plugins: [],
}