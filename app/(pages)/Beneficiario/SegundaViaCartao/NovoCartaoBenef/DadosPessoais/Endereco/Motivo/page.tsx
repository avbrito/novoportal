'use client';

import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/Layout";
import Link from "next/link";
import { CarteirinhaIcon } from "@/app/components/Icons/CarteirinhaIcon";
import { ArrowRightBlack } from "@/app/components/Icons/ArrowRightBlack";


const beneficiarios = [
  { motivo: "Não recebeu o Cartão" },
  { motivo: "Problema na tarja magnética" },
  { motivo: "Cartão roubado" },
  { motivo: "Cartão extraviado" },
  { motivo: "Cartão apagado" },
  { motivo: "Cartão quebrado" },
  { motivo: "Outro" },
];

export default function Motivo() {
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
              <span className="text-blue-500">&gt; Beneficiário&nbsp;</span>
              <span className="text-blue-500">&gt; Dados pessoais&nbsp;</span>
              <span className="text-blue-500">&gt; Endereço&nbsp;</span>
              <span className="text-gray-400"> &gt; Motivo</span>
            </Link>
            <div className="flex items-center w-full mb-6">
              <div
                onClick={() => router.push("/Empresa/SegundaViaCartao")}
                className="cursor-pointer"
              >
                <ArrowLeftBlue />
              </div>
              <h2 className="ml-2 text-2xl text-blue-black dark:text-white font-sans">
                Motivo
              </h2>
            </div>
            <div className="w-80 space-y-3" onClick={() => router.push("/Beneficiario/SegundaViaCartao/NovoCartaoBenef/DadosPessoais/Endereco/Motivo/MotivoSolicitacao")}>
              {beneficiarios.map((b, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-100 border-gray-unimed"
                >
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-gray-400">
                      {b.motivo}
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
