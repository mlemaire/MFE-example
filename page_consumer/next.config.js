// next.config.js

const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "page_consumer",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          page_provider: `page_provider@http://localhost:4000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          app_provider: `app_provider@http://localhost:5000/_next${
            isServer ? "/server" : ""
          }/static/runtime/remoteEntry.js`,
        },
      })
    );

    return config;
  },
};
