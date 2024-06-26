/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grayishBlue: 'hsl(201, 11%, 66%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        strongCyan: 'hsl(171, 66%, 44%)',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
};
