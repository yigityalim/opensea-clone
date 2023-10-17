import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        ...colors,
        // gray colors
        gray: {
          ...colors.gray,
          1: '#b3b3b3',
          2: '#545454',
          3: '#121212',
        },

        // blue colors
        blue: {
          ...colors.blue,
          1: '#8fc7ff',
          2: '#2e8dee',
          3: '#2081e2',
          4: '#1868b7',
          5: '#235aa3',
        },

        // green colors
        green: {
          ...colors.green,
          1: '#68f2ab',
          2: '#34c77b',
          3: '#0c954e',
        },

        // yellow colors
        yellow: {
          ...colors.yellow,
          1: '#f6c000',
          2: '#c59e10',
        },

        // red colors
        red: {
          ...colors.red,
          1: '#eb6b6b',
          2: '#eb5757',
          3: '#e62929',
        },

        // accent colors
        accent: {
          'accent-red': '#e62929',
          'accent-purple': '#5d32e9',
          'accent-fuchsia': '#e932be',
          'accent-orange': '#f2994a',
          'accent-cerulean': '#15b2e5',
          'accent-aqua': '#2bcde4',
        },

        // base colors
        base: '#ffffff',
        'base-2': '#f6f6f6',

        // component colors
        'component-gray-1': 'rgba(18 ,18 ,18 , 4%)',
        'component-gray-2': 'rgba(18 ,18 ,18 , 8%)',
        'component-gray-3': 'rgba(18 ,18 ,18 , 12%)',
        'component-gray-4': 'rgba(18 ,18 ,18 , 20%)',

        // elevation colors
        'elevation-1': '#ffffff',
        'elevation-2': '#ffffff',
        'elevation-3': '#ffffff',

        // text colors
        'text-primary': '#121212',
        'text-secondary': '#545454',
        'text-interactive-primary': '#2081e2',
        'text-interactive-primary-hover': '#235aa3',
        'text-interactive-secondary': '#121212',
        'text-interactive-secondary-hover': '#545454',

        // interactive-icon colors
        'interactive-icon-primary': '#121212',
        'interactive-icon-primary-hover': '#545454',
        'interactive-icon-secondary': '#545454',
        'interactive-icon-secondary-hover': '#121212',

        // border-colors
        'border-1': 'rgba(18 ,18 ,18 , 8%)',
        'border-2': 'rgba(18 ,18 ,18 , 12%)',
        'border-3': 'rgba(18 ,18 ,18 , 32%)',

        // DARK MODE

        'dark-base': '#121212',
        'dark-base-2': '#1b1b1b',

        // dark component gray
        'dark-component-gray-1': 'rgba(255, 255, 255, 4%)',
        'dark-component-gray-2': 'rgba(255, 255, 255, 8%)',
        'dark-component-gray-3': 'rgba(255, 255, 255, 12%)',
        'dark-component-gray-4': 'rgba(255, 255, 255, 20%)',

        // dark border
        'dark-border-1': 'rgba(255, 255, 255, 8%)',
        'dark-border-2': 'rgba(255, 255, 255, 12%)',
        'dark-border-3': 'rgba(255, 255, 255, 32%)',

        // elevation colors
        'dark-elevation-1': '#202020',
        'dark-elevation-2': '#252525',
        'dark-elevation-3': '#2e2e2e',

        // text colors
        'dark-text-primary': '#ffffff',
        'dark-text-secondary': '#b3b3b3',
        'dark-text-interactive-primary': '#8fc7ff',
        'dark-text-interactive-primary-hover': '#2081e2',
        'dark-text-interactive-secondary': '#ffffff',
        'dark-text-interactive-secondary-hover': '#b3b3b3',

        // interactive-icon colors
        'dark-interactive-icon-primary': '#ffffff',
        'dark-interactive-icon-primary-hover': '#b3b3b3',
        'dark-interactive-icon-secondary': '#b3b3b3',
        'dark-interactive-icon-secondary-hover': '#ffffff',
      },
      boxShadow: {
        'elevation-1-subtle': '0 4px 16px rgba(0, 0, 0, 4%)',
        'elevation-1': '0 4px 16px rgba(0, 0, 0, 8%)',
        'elevation-2': '0 6px 24px rgba(0, 0, 0, 12%)',
        'elevation-3': '0 6px 32px rgba(0, 0, 0, 20%)',
      },
    },
  },
  plugins: [],
};
export default config;
