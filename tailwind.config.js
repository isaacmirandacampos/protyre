/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'green-to-black-gradient': 'linear-gradient(to bottom, rgba(0, 201, 80, 0.3), #000000)',
      }
    },
  },
  plugins: [],
}
