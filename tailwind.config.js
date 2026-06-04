/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        void: '#ffffff',
        surface: '#f8fafc',
        border: '#e2e8f0',
        accent: '#0d9488',
        'accent-dim': '#0f766e',
        ink: '#0f172a',
        muted: '#64748b',
      },
    },
  },
  plugins: [],
};
