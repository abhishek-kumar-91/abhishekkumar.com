/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideInRight: {
          '20%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        scroll: 'scroll 40s linear infinite',
        'slide-in-right': 'slideInRight 1s ease-out',
        'fade-in-left': 'fadeInLeft 0.5s ease-out',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  
  plugins: [],
}

