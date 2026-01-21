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
        'exec-black': '#000000',
        'exec-carbon': '#121212',
        'exec-silver': '#E5E5E5',
        'exec-platinum': '#A0A0A0',
        'exec-blue': '#007AFF',
        'exec-white': '#FFFFFF',
      },
      fontFamily: {
        'space': ['Space Mono', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
      }
    },
  },
  plugins: [],
}
export default config
