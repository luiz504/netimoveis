import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '312': '78rem',
        '172': '43rem',
      },

      colors: {
        'off-white': '#EDF1F4',
        'gray-100': '#F3F3F3',
        'gray-200': '#E1E5E9',
        'gray-300': '#D9D9D9',
        'gray-400': '#D0D5D8',
        'gray-450': '#C0C7Ca',
        'gray-500': '#A1A7AA',
        'gray-600': '#808587',
        'gray-650': '#848484',
        'gray-700': '#555555',
        'gray-800': '#4E5254',
        'gray-900': '#3A3A3A',
        'gray-950': '#393B3D',
        'gray-1000': '#161616',
        'purple-500': '#8224CB',
        'purple-700': '#652D91',
        'orange-400': '#F36C21',
        'orange-500': '#ED672B',
        'orange-600': '#E95808',
        'blue-100': '#063D7E',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
