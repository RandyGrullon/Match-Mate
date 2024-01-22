/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'sm': '640px',  // Pequeños dispositivos como teléfonos
        'md': '768px',  // Dispositivos medianos como tablets
        'lg': '1024px', // Dispositivos grandes como laptops
        'xl': '1280px', // Dispositivos extra grandes
      },
    },
    fontFamily: {
      // avenir next font
      'avenir-next': ['Avenir Next', 'sans-serif'],
    },
  },
  plugins: [],
}
