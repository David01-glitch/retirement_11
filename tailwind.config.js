/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF8F3',
          100: '#F6F0E5',
          200: '#EDE1CB',
        },
        olive: {
          400: '#A3B18A',
          500: '#7A8C5C',
          600: '#5E7244',
          700: '#475730',
        },
        terracotta: {
          400: '#E6A07C',
          500: '#D27D55',
          600: '#B25E37',
        },
        wood: {
          400: '#C9A57B',
          500: '#A47148',
          600: '#7D5532',
          800: '#3E2C1C',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['17px', '1.7'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(62, 44, 28, 0.18)',
        warm: '0 20px 60px -20px rgba(178, 94, 55, 0.25)',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #FBF8F3 0%, #F6E8D6 100%)',
        'gradient-olive': 'linear-gradient(135deg, #7A8C5C 0%, #475730 100%)',
        'gradient-terra': 'linear-gradient(135deg, #E6A07C 0%, #B25E37 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
};
