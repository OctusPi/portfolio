import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Violeta da marca OctusPi (#7345FE)
        brand: {
          50: '#f3f0ff',
          100: '#e9e3ff',
          200: '#d4c9ff',
          300: '#b5a2ff',
          400: '#9575ff',
          500: '#7345fe',
          600: '#6230f0',
          700: '#5221d4',
          800: '#441cad',
          900: '#3a1b8c',
        },
        ink: {
          800: '#16161f',
          900: '#0f0f16',
          950: '#09090d',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
