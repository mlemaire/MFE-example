import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  source: {
    entry: "./app/components/RemoteComponent.tsx",
  },
  output: {
    filename: "remoteEntry.js",
    library: { type: "module" },
    uniqueName: "remote",
  },
  server: {
    port: 9000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  },
  dev: {
    assetPrefix: "http://localhost:9000/",
  },
  tools: {
    rspack: (config, { appendPlugins, isServer }) => {
      if (isServer) return;
      appendPlugins([
        new ModuleFederationPlugin({
          name: "remote",
          filename: "remoteEntry.js",
          exposes: {
            "./RemoteComponent": "./app/components/RemoteComponent.tsx",
          },
          shared: {
            react: {
              singleton: true,
              eager: true,
              requiredVersion: "^18.2.0",
            },
            "react-dom": {
              singleton: true,
              eager: true,
              requiredVersion: "^18.2.0",
            },
          },
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
