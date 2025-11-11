/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Force dark mode via html class
  theme: {
    extend: {
      colors: {
        'accent': '#a76dff',
        'text': '#e7e7e7',
        'text-secondary': '#a1a1aa',
        'bg-start': '#2a0060',
        'bg-end': '#120022',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, var(--bg-start) 0%, var(--bg-end) 100%)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};