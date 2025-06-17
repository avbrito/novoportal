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

export default function NovoCartaoBenef() {
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
              
              <span className="text-blue-500">2ª via de cartão&nbsp;</span>
              <span className="text-gray-400"> &gt; Beneficiário</span>
            </Link>
            <div className="flex items-center w-full mb-6">
              <div
                onClick={() => router.push("/Beneficiario/SegundaViaCartao")}
                className="cursor-pointer"
              >
                <ArrowLeftBlue />
              </div>
              <h2 className="ml-2 text-2xl text-blue-black dark:text-white font-sans">
                Beneficiário
              </h2>
            </div>
            <p className="text-gray-600 dark:text-white text-sm mb-4">
              Para quem é a carteirinha?
            </p>
            <div className="w-80 space-y-3" onClick={() => router.push("/Beneficiario/SegundaViaCartao/NovoCartaoBenef/DadosPessoais")}>
              {beneficiarios.map((b, index) => (
                <div
                  key={index}
                  className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 bg-white rounded-[9px] border border-gray-unimed"
                >
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-gray-400">
                      {b.nome}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs flex items-center">
                      <span className="mr-2 text-blue-black dark:text-gray-400"><CarteirinhaIcon /></span> {b.numero}
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
