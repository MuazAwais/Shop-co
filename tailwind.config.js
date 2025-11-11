/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  			inter: [
  				'var(--font-geist-inter)',
                    ...defaultTheme.fontFamily.sans
                ]
  		},
  		container: {
  			center: true,
  			padding: {
  				DEFAULT: '1rem',
  				sm: '2rem',
  				md: '2.5rem',
  				lg: '3.75rem',
  				xl: '6.25rem',
  				'2xl': '6.25rem'
  			}
  		},
    },
  },
  plugins: [],
}

