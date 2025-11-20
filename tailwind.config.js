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
        background: '#07090f',
        surface: '#0e111a',
        muted: '#6b7280',
        accent: '#7c3aed',
        accentLight: '#a855f7',
        border: 'rgba(255, 255, 255, 0.08)',
      },
      boxShadow: {
        glass: '0 20px 60px rgba(0, 0, 0, 0.35)',
        glow: '0 10px 40px rgba(124, 58, 237, 0.35)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 20% 20%, rgba(124,58,237,0.08), transparent 30%), radial-gradient(circle at 80% 0%, rgba(14,165,233,0.08), transparent 35%), radial-gradient(circle at 0% 80%, rgba(34,197,94,0.05), transparent 30%)',
      },
    },
  },
  plugins: [forms],
}
