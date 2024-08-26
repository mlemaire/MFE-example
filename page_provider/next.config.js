const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "page_provider",
        remotes: {
          page_consumer: `page_consumer@http://localhost:4001/_next/static/${
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
