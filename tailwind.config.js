const merge = require("lodash.merge");
const config = require("@studiometa/tailwind-config");
const plugin = require("tailwindcss/plugin");

/**
 * TailwindCSS Configuration File
 *
 * @docs https://tailwindcss.com/docs/configuration
 * @default: https://github.com/studiometa/tailwind-config/blob/develop/src/index.js
 */
module.exports = merge(config, {
  experimental: {
    applyComplexClasses: true
  },
  theme: {
    container: false
  },
  plugins: [
    ...config.plugins,
    plugin(({ addComponents }) => {
      const container = {
        ".container": {
          maxWidth: "18.5rem",
          margin: "0 auto",
          "@screen xs": {
            maxWidth: "26.25rem"
          },
          "@screen s": {
            maxWidth: "43.75rem"
          },
          "@screen m": {
            maxWidth: "78rem"
          }
        }
      };

      addComponents(container);
    })
  ]
});
