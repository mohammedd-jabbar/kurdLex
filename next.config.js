/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")("./i18n.js");

module.exports = withNextIntl({
  webpack: (config) => {
    // Add a rule to handle .aff and .dic files
    config.module.rules.push({
      test: /\.(aff|dic)$/,
      use: "file-loader",
    });

    return config;
  },
});
