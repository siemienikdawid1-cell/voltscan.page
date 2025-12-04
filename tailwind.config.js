/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          dark: '#004C99',
          light: '#3399FF',
        },
        secondary: {
          DEFAULT: '#00AAFF',
          light: '#66CCFF',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          lighter: '#1A1A1A',
          light: '#2A2A2A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
