/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#030712',
          900: '#070d1e',
          850: '#0b132b',
          800: '#111d42',
          700: '#1c2d5a'
        },
        solar: {
          flare: '#ff3d00',
          corona: '#ff9100',
          gold: '#ffd166',
          cyan: '#00f0ff'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
