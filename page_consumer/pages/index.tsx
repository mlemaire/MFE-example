import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";

const RemoteComponent = dynamic(() => import("next2/RemoteComponent"), {
  ssr: false,
});
// const RemoteComponent = lazy(() => import("next2/RemoteComponent"));

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <h1 className="text-4xl font-bold text-slate-200">
          Nextjs (page router)
        </h1>
        <p className="text-xl font-bold text-slate-200">
          Application using an MFE component
        </p>
        <div className="border-2 border-blue-800 rounded-lg p-4">
          <p className="text-sm italic text-slate-400">
            MFE nextjs (page router)
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <RemoteComponent name={"Tom"} />
          </Suspense>
        </div>
        <div className="border-2 border-blue-800 rounded-lg p-4">
          <p className="text-sm italic text-slate-400">
            MFE nextjs (app router)
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            {/* <RemoteComponent2 name={"Anna"} /> */}
          </Suspense>
        </div>
      </div>
    </main>
  );
}
