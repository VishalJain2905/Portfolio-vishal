/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Fredoka', 'Nunito', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#f1ecfb',
        accent: '#7c5cff',
        'accent-dim': '#5b3fe0',
        ink: '#2b2240',
        'ink-muted': '#4f4668',
        muted: '#7a7194',
      },
    },
  },
  plugins: [],
};
