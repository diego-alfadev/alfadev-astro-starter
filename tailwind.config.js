const plugin = require('tailwindcss/plugin')
const theme = require("./src/config/theme.json");

let fontPrimaryType, fontSecondaryType;
if (theme.fonts.font_family.primary) {
  fontPrimaryType = theme.fonts.font_family.primary_type;
}
if (theme.fonts.font_family.secondary) {
  fontSecondaryType = theme.fonts.font_family.secondary_type;
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [{ pattern: /^col-/ }, ...theme.colors.flatMap((color) => [{ pattern: new RegExp(`bg-${color}`) }])],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        ...theme.colors.reduce((acc, key) => {
          acc[key] = 'rgba(var(--' + key + '))';
          return acc;
        }, {}),
      },
      fontFamily: {
        primary: ["var(--font-primary)", fontPrimaryType],
        secondary: ["var(--font-secondary)", fontSecondaryType],
      },
      textShadow: {
        // --tw-shadow-color is not defined in tailwindcss by now
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 3px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },

      // Custom animations
      // Defined keyframes
      keyframes: {
        "fade-in": {
          '0%': { transform: 'translateY(15pt)', opacity: 0 },
          '100%': { transform: 'translateY(0pt)' },
        },
        "fade-out": {
          '0%': { transform: 'translateY(0pt)' },
          '100%': { transform: 'translateY(15pt)', opacity: 0 },
        },
        "dissappear": {
          '0%': { opacity: 1, visibility: 'visible' },
          '100%': { visibility: 'hidden', opacity: 0},
        },
      },
      // Defined animations
      animation: {
        "fade-in": 'fade-in 1s ease-in-out',
        "fade-out": 'fade-out 1s ease-in-out',
        "dissappear": 'dissappear 1.5s ease-in-out forwards',
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({
      generateContainer: false,
      gridGutterWidth: "2rem",
      gridGutters: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
      },
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
