const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const path = require("path");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "app_provider",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./RemoteComponent": "./app/components/RemoteComponent.tsx",
        },
        shared: {
          react: { singleton: true, eager: true },
          "react-dom": { singleton: true, eager: true },
        },
      })
    );
    return config;
  },
};
