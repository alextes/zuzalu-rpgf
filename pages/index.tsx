import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";
import zuzaluCerts from "../zuzalu_certs.json";
import zuzaluLogo from "../zuzalulogo.webp";

const inter = Inter({ subsets: ["latin"] });

type Cert = {
  name: string;
  description: string;
  image: string;
  hypercert: {
    work_scope: { value: string[] };
    work_timeframe: { value: number[] };
    contributors: {
      value: string[];
    };
  };
};

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <div className="z-10 justify-between items-center w-full max-w-5xl font-mono text-sm lg:flex">
        <div className="flex justify-center w-full">
          <Image
            src={zuzaluLogo as StaticImageData}
            alt="Vercel Logo"
            className=""
            priority
          />
        </div>
      </div>
      <div className="py-8 mb-16 font-mono text-8xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        RetroPGF
      </div>

      <div className="flex flex-wrap gap-y-12">
        {(zuzaluCerts as Cert[]).map((cert) => (
          <Image
            key={cert.description}
            className="w-1/3"
            src={cert.image}
            alt=""
          />
        ))}
      </div>
    </main>
  );
}
