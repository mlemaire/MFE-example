// next.config.js
// either from default
const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "next2",
        remotes: {
          next1: `next1@http://localhost:4001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./RemoteComponent": "./components/RemoteComponent.tsx",
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
};
