const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Suppress source map warnings for specific packages
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: [
          // Exclude problematic packages from source map processing
          /node_modules\/@mediapipe/,
          /node_modules\/three/,
        ],
      });

      // Alternative approach: completely disable source map warnings
      webpackConfig.ignoreWarnings = [
        {
          module: /node_modules\/@mediapipe/,
        },
        {
          module: /node_modules\/three/,
        },
        function (warning) {
          return (
            warning.module &&
            warning.module.resource &&
            warning.module.resource.includes("@mediapipe")
          );
        },
      ];

      return webpackConfig;
    },
  },
};
