import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";
import zuzaluCerts from "../zuzalu_certs.json";
import zuzaluLogo from "../zuzalulogo.webp";

const decodedZuzaluCerts = (zuzaluCerts as string[]).map((cert: string) =>
  JSON.parse(cert)
);

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
    <main className="flex flex-col justify-between items-center p-4 min-h-screen bg-gray-900 lg:p-24">
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
      <div className="py-8 mb-16 font-mono text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 lg:text-8xl">
        RetroPGF
      </div>

      <div className="flex flex-col gap-y-32 w-full">
        {(decodedZuzaluCerts as Cert[]).map((cert) => (
          <div
            className="flex flex-col pb-24 border-b-2 border-rose-500 md:flex-row"
            key={cert.description}
          >
            <div className="relative mb-16 w-full h-64">
              <Image className="object-contain" fill src={cert.image} alt="" />
            </div>
            <div className="flex flex-col gap-y-16 w-full text-white">
              <div className="flex flex-col">
                <span className="px-2 mb-4 text-2xl font-extrabold text-white bg-rose-500 rounded">
                  description
                </span>
                <span>{cert.description}</span>
              </div>
              <div className="flex flex-col">
                <span className="px-2 mb-4 text-2xl font-extrabold text-white bg-rose-500 rounded">
                  contributors
                </span>
                <ul className="list-disc list-inside">
                  {cert.hypercert.contributors.value.map((contributor) => (
                    <li className="truncate" key={contributor}>
                      {contributor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
