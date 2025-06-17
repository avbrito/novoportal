'use client';

import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/Layout";
import Link from "next/link";
import { CarteirinhaIcon } from "@/app/components/Icons/CarteirinhaIcon";
import { ArrowRightBlack } from "@/app/components/Icons/ArrowRightBlack";


const beneficiarios = [
  { nome: "Bruno Leal", numero: "014 000000000 0" },
  { nome: "Letícia Ramos", numero: "4 125 000000000 8" },
];

export default function NovaAutorizacao() {
  const router = useRouter();

  return (
    <MenuProvider>
      <Layout>
        <div className="min-h-screen bg-white dark:bg-verde-dark p-6 flex ml-5 items-start">
          <div className="w-full max-w-md">
            <Link
              href="/reembolso"
              className="text-blue-500 flex items-center text-sm mb-6"
            >
              {/* <span className="mr-2">&larr;</span> */}
              <span className="text-blue-500">Transcrição de guias </span>
              <span className="text-gray-400 ml-1"> &gt; Beneficiário</span>
            </Link>
            <div className="flex items-center w-full mb-6">
              <div
                onClick={() => router.push("/Beneficiario")}
                className="cursor-pointer"
              >
                <ArrowLeftBlue />
              </div>
              <h2 className="ml-2 text-2xl text-blue-black dark:text-white font-sans">
                Solicitar nova autorização
              </h2>
            </div>
            <p className="text-blue-black dark:text-white font-sans text-lg my-8 ">
              Para quem será a consulta?
            </p>
            <div className="w-80 space-y-3" onClick={() => router.push("/Beneficiario/TranscricaoGuias/NovaAutorizacao/Local")}>
              {beneficiarios.map((b, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-100 border-gray-unimed"
                >
                  <div>
                    <p className="font-sans font-medium text-lg text-blue-black dark:text-gray-400">
                      {b.nome}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs flex items-center">
                      <span className="mr-2 text-blue-black text-sm font-sans dark:text-gray-400"><CarteirinhaIcon /></span> {b.numero}
                    </p>
                  </div>
                  <span className="text-gray-400"><ArrowRightBlack /></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
}
