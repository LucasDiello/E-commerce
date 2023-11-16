/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
];

export const theme = {
  extend: {},
  fontFamily: {
    epilogue: ['Epilogue', 'sans-serif'],
  },
  screens: {
    xs: { max: '500px'},
    md: '500px',
    lg: '1024px',
  },
}

export const plugins = [];
