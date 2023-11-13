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
    xs: '0px',
    md: '700px',
    lg: '1024px',
  },
}

export const plugins = [];
