import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'tabindex': "url('data:image/png;base64,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')",
      },
    },
  },
  plugins: [],
}
export default config
