import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Poppins', 'sans-serif'],
        body: ['"Manrope"', 'Poppins', 'sans-serif'],
      },
      colors: {
        background: '#04060d',
        surface: '#0e1220',
        muted: '#94a3b8',
        accent: '#7c3aed',
        accent2: '#22d3ee',
        accent3: '#9ef01a',
        warm: '#f59e0b',
        danger: '#ff6b6b',
        border: 'rgba(255, 255, 255, 0.08)',
      },
      boxShadow: {
        core: '0 40px 120px rgba(0,0,0,0.55)',
        glass: '0 20px 60px rgba(0, 0, 0, 0.35)',
        glow: '0 10px 40px rgba(124, 58, 237, 0.35)',
        hover: '0 20px 60px rgba(124, 58, 237, 0.35)',
        floating: '0 10px 30px rgba(34, 211, 238, 0.25)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 20% 20%, rgba(124,58,237,0.08), transparent 30%), radial-gradient(circle at 80% 0%, rgba(14,165,233,0.08), transparent 35%), radial-gradient(circle at 0% 80%, rgba(34,197,94,0.05), transparent 30%)',
        'hero-gradient': 'linear-gradient(135deg, #7c3aed 0%, #22d3ee 45%, #9ef01a 100%)',
        'mesh-soft':
          'radial-gradient(circle at 20% 20%, rgba(124,58,237,0.12), transparent 35%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.12), transparent 40%), radial-gradient(circle at 10% 80%, rgba(159,240,26,0.08), transparent 35%)',
      },
      borderRadius: {
        xl2: '20px',
        xl3: '30px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      blur: {
        glass: '18px',
        bg: '30px',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(124,58,237,0.45)' },
          '50%': { boxShadow: '0 0 0 8px rgba(124,58,237,0.05)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'dash-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'shine': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'particle-drift': {
          '0%': { transform: 'translate3d(0,0,0)', opacity: 0.8 },
          '50%': { opacity: 0.4 },
          '100%': { transform: 'translate3d(12px, -16px, 0)', opacity: 0 },
        },
        'constellation': {
          '0%': { opacity: 0.5 },
          '50%': { opacity: 0.8 },
          '100%': { opacity: 0.5 },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'dash-move': 'dash-move 6s linear infinite',
        shine: 'shine 3s linear infinite',
        'particle-drift': 'particle-drift 8s ease-in-out infinite',
        constellation: 'constellation 10s ease-in-out infinite',
      },
    },
  },
  plugins: [forms],
}
