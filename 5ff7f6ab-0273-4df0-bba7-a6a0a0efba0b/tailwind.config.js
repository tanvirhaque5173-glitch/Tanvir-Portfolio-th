/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
        // হেডিং বা স্পেশাল লেখার জন্য এই ইউনিক Serif ফন্টটি যোগ করা হলো
        serif: ['"Playfair Display"', '"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        gray: {
          50: '#F9F9F9',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#666666',
          700: '#404040',
          800: '#262626',
          900: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
}
