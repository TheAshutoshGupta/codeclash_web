const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    extend: {
      
        "animation": {
          "text-gradient": "text-gradient 1.5s linear infinite",
          'infinite-scroll': 'infinite-scroll 25s linear infinite',
          "border-width": "border-width 3s infinite alternate",
          "jiggle": "jiggle 0.5s ease-in-out"
        },
        "keyframes": {
          "border-width": {
            "from": {
              "width": "10px",
              "opacity": "0"
            },
            "to": {
              "width": "100px",
              "opacity": "1"
            }
          },
          "text-gradient": {
            "to": {
              "backgroundPosition": "200% center"
            }
          }
          ,'infinite-scroll': {
            "from": { transform: 'translateX(0)' },
            "to": { transform: 'translateX(-100%)' },
        }
        },
        "jiggle": {
          "0%": {
            "transform": "rotate(-3deg)"
          },
          "50%": {
            "transform": "rotate(3deg)"
          },
          "100%": {
            "transform": "rotate(-3deg)"
          }
        }
      }
    
  },
  plugins: [],
}

