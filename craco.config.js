const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@contexts": path.resolve(__dirname, "./src/utils/contexts"),
      "@api": path.resolve(__dirname, "./src/utils/api"),
    },
  },
};
