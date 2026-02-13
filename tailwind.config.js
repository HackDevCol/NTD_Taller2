/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        'accent-red': '#e31e24',
        'accent-dark': '#8b0000',
      },
    },
  },
  plugins: [],
}
