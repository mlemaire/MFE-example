import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import RemoteComponent from "../components/RemoteComponent";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <h1 className="text-4xl font-bold text-slate-200">
          Nextjs (page router)
        </h1>
        <p className="text-xl font-bold text-slate-200">
          Application exposing an MFE component
        </p>
        <div className="border-2 border-slate-800 rounded-lg p-4">
          <RemoteComponent />
        </div>
      </div>
    </main>
  );
}
