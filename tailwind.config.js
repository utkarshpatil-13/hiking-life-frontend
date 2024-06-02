/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f262f',
      },
      backgroundImage: {
        'hero-pattern': "url('frontend\\src\\assets\\images\\place_your_image_here_dou_10.jpg')",
        'bgsec': "url('https://bookmyjunk.com/src/img/bgsec.png')",
        'hazards': "url('https://bookmyjunk.com/src/img/bgshape.png')",
        'book': "url('https://bookmyjunk.com/src/img/bgshape1.png')",
        'linewarriors': "url('https://bookmyjunk.com/src/img/linewarriers.png')",
      },
      fontFamily: {
        'handwritten': ['Permanent Marker', 'cursive'],
      },
    },
  },
  plugins: [],
};