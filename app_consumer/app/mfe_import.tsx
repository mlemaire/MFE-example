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
      name: "page_provider",
      entry: `http://localhost:4000/_next/static/${
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
  return loadRemote("page_provider/RemoteComponent", {
    from: "runtime",
  });
});

export default function RemoteComponent() {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) return <p>burkk...</p>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {<LoadedRemoteComponent />}
    </Suspense>
  );
}
