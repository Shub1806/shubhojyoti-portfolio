/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        wash: 'var(--wash)',
        ink: 'var(--ink)',
        accent: 'var(--accent)',
        accentHover: 'var(--accent-hover)',
        accentContrast: 'var(--accent-contrast)',
        signal: 'var(--signal)',
        muted: 'var(--muted)',
        rule: 'var(--rule)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { shell: '1120px' },
    },
  },
  plugins: [],
};
