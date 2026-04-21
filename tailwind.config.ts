import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        mountain: {
          mist:   '#e8f5e9',
          forest: '#1b5e20',
          snow:   '#f8fffe',
          sky:    '#e0f2fe',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mountain-gradient': 'linear-gradient(135deg, #052e16 0%, #15803d 40%, #4ade80 100%)',
        'hero-overlay':      'linear-gradient(to bottom, rgba(5,46,22,0.55) 0%, rgba(21,128,61,0.35) 60%, rgba(0,0,0,0.6) 100%)',
        'card-gradient':     'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        'green-mesh':        'radial-gradient(at 40% 20%, #dcfce7 0px, transparent 50%), radial-gradient(at 80% 0%, #bbf7d0 0px, transparent 50%), radial-gradient(at 0% 50%, #f0fdf4 0px, transparent 50%)',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'slide-up':    'slideUp 0.6s ease-out',
        'fade-in':     'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      boxShadow: {
        'green-glow': '0 0 30px rgba(22,163,74,0.25)',
        'card-hover': '0 20px 60px rgba(22,163,74,0.15)',
      },
    },
  },
  plugins: [],
}
export default config
