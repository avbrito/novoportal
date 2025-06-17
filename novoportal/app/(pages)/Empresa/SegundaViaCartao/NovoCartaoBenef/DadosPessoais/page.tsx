'use client';

import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/Layout";
import Link from "next/link";
import { CarteirinhaIcon } from "@/app/components/Icons/CarteirinhaIcon";
import { ArrowRightBlack } from "@/app/components/Icons/ArrowRightBlack";
import FormDadosPessoais from "@/app/components/FormDadosPessoais/page";

const beneficiarios = [
  { nome: "Bruno Leal", numero: "014 000000000 0" },
  { nome: "Letícia Ramos", numero: "4 125 000000000 8" },
];

export default function DadosPessoais() {
  const router = useRouter();

  return (
    <MenuProvider>
      <Layout>
        <div className="min-h-screen bg-white dark:bg-verde-dark px-4 sm:px-6 py-6">
          {/* Container centralizado e fixo */}
          <div className="w-full max-w-[808px] mx-auto">
            <Link
              href="/Empresa/SegundaViaCartao/NovoCartaoBenef"
              className="text-blue-500 flex flex-wrap items-center text-sm mb-6"
            >
              <span className="text-blue-500">2ª via de cartão&nbsp;</span>
              <span className="text-blue-500">&gt; Beneficiário</span>
              <span className="text-gray-400">&nbsp;&gt; Dados pessoais</span>
            </Link>

            <div className="flex items-center w-full mb-6">
              <div
                onClick={() =>
                  router.push("/Empresa/SegundaViaCartao/NovoCartaoBenef")
                }
                className="cursor-pointer"
              >
                <ArrowLeftBlue />
              </div>
              <h2 className="ml-2 text-2xl text-blue-black dark:text-white font-sans">
                Dados pessoais
              </h2>
            </div>

            <div className="w-full">
              <FormDadosPessoais perfil="Empresa" />
            </div>
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
}
