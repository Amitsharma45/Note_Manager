/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryligth: '#AAB8B6',
        secondarylight:'#BCCBC9',
        inputlight:'#E9ECE6'
      },
      keyframes: {
        slideIn: {
          'from': {
            transform: 'translateY(-50%)',
          },
          'to': {
            transform: 'translateY(0%)',
          },
        }
      },
      animation: {
        'slide-in': 'slideIn .50s ease-in-out',
      },
    },
  },
  plugins: [],
}