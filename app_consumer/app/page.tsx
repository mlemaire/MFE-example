import RemoteComponent from "./mfe_import";
import RemoteComponent2 from "./mfe_import_app";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <h1 className="text-4xl font-bold text-slate-200">
          Nextjs (app router)
        </h1>
        <p className="text-xl font-bold text-slate-200">
          Application using an MFE component
        </p>
        <div className="border-2 border-green-800 rounded-lg p-4">
          <p className="text-sm italic text-slate-400">
            MFE nextjs (page router)
          </p>
          <RemoteComponent />
        </div>
        <div className="border-2 border-green-800 rounded-lg p-4">
          <p className="text-sm italic text-slate-400">
            MFE nextjs (app router)
          </p>
          <RemoteComponent2 name={"Tom"} />
        </div>
      </div>
    </main>
  );
}
