/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey-200': '#E2E8F0',
        'custom-grey-400': '#94A3B8  ',
        'custom-grey-500': '#64748B',
        'custom-grey-900': '#0F172A',
        'primary-blue': '#2563EB',
        'secondary-blue': '#64748B',
        'blue-400': '2563EB'
      }
    },
  },
  plugins: [],
}

