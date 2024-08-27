"use client";
import { init, loadRemote } from "@module-federation/enhanced/runtime";
import { lazy, Suspense, useEffect, useState } from "react";
import React from "react";
import nodeRuntimePlugin from "@module-federation/node/runtimePlugin";

const isServer = typeof window === "undefined";

init({
  name: "app_consumer",
  remotes: [
    {
      name: "app_provider",
      entry: `http://localhost:5000/_next/static/${
        isServer ? "ssr" : "chunks"
      }/remoteEntry.js`,
    },
  ],
  shared: {
    react: {
      version: "18.2.0",
      scope: "default",
      lib: () => React,
      shareConfig: {
        singleton: true,
        requiredVersion: "^18.2.0",
      },
    },
  },
  plugins: [nodeRuntimePlugin()],
});

const LoadedRemoteComponent = lazy(() => {
  return loadRemote("app_provider/RemoteComponent", {
    from: "runtime",
  });
});

export default function RemoteComponent({ name }: { name: string }) {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) return <p>burkk...</p>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {<LoadedRemoteComponent name={name} />}
    </Suspense>
  );
}
