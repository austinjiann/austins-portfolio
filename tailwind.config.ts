import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          base: '#0C0D0E',
          vignette: '#141516',
        },
      },
      boxShadow: {
        'hero-outer': '0 0 80px rgba(0,0,0,0.6)',
      },
      borderRadius: {
        '3xl': '24px',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      letterSpacing: {
        tightest2: '-0.01em',
      },
      maxWidth: {
        card: '760px',
      },
    },
  },
  plugins: [],
}

export default config

