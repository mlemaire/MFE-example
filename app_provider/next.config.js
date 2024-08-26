// next.config.js
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.experiments = {
      ...config.experiments,
      outputModule: true,
    };

    config.plugins.push(
      new ModuleFederationPlugin({
        name: "MFE15RR",
        library: { type: "module", name: "MFE15RR" },
        filename: "static/runtime/remoteEntry.js",
        exposes: {
          "./RemoteComponent": "./app/components/RemoteComponent.tsx",
        },
      })
    );

    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
};
