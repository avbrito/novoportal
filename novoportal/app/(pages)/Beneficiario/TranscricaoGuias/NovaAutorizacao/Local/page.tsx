"use client";

import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/Layout";
import Link from "next/link";
import { CarteirinhaIcon } from "@/app/components/Icons/CarteirinhaIcon";
import { ArrowRightBlack } from "@/app/components/Icons/ArrowRightBlack";

const beneficiarios = [
  { nome: "Uberlândia" },
  { nome: "Centralina" },
  { nome: "Indianópolis" },
  { nome: "Monte Alegre de Minas" },
  { nome: "Prata" },
  { nome: "Tupaciguara" },
];

export default function Local() {
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
              
              <span className="text-blue-link mr-2">Transcrição de guias </span>
              <span className="text-blue-link mr-2"> &gt; Beneficiário</span>
              <span className="text-gray-400"> &gt; Local</span>
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
            <p className="text-blue-black font-sans dark:text-white text-lg my-8">
              Onde será realizado o exame?
            </p>
            <div
              className="w-80 space-y-3"
              onClick={() =>
                router.push(
                  "/Beneficiario/TranscricaoGuias/NovaAutorizacao/Local/FormAutorizacao"
                )
              }
            >
              {beneficiarios.map((b, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-100 border-gray-unimed"
                >
                  <div>
                    <p className="font-sans text-sm text-blue-black dark:text-gray-400">
                      {b.nome}
                    </p>
                  </div>
                  <span className="text-gray-400">
                    <ArrowRightBlack />
                  </span>
                </div>
              ))}
            </div>
            <p className="text-blue-black dark:text-white text-sm mt-4 font-sans">*Caso sua cidade não esteja na lista acima, por favor procure <span className="text-blue-link underline">nosso atendimento</span>.</p>
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
}
