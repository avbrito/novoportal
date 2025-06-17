'use client';

import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/Layout";
import Link from "next/link";
import { CarteirinhaIcon } from "@/app/components/Icons/CarteirinhaIcon";
import { ArrowRightBlack } from "@/app/components/Icons/ArrowRightBlack";
import FormEnderecoBenef from "@/app/components/FormEndereco/page";


const beneficiarios = [
  { nome: "Bruno Leal", numero: "014 000000000 0" },
  { nome: "Letícia Ramos", numero: "4 125 000000000 8" },
];

export default function Endereco() {
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
              <span className="text-blue-500"> &gt; Beneficiário</span>
              <span className="text-blue-500"> &gt; Dados pessoais</span>
              <span className="text-gray-400"> &gt; Endereço</span>
            </Link>
            <div className="flex items-center w-full mb-6">
              <div
                onClick={() => router.push("/Empresa/SegundaViaCartao/NovoCartaoBenef")}
                className="cursor-pointer"
              >
                <ArrowLeftBlue />
              </div>
              <h2 className="ml-2 text-2xl text-blue-black dark:text-white font-sans">
                Endereço
              </h2>
            </div>
            <div className="w-80 space-y-3">
               <FormEnderecoBenef />
            </div>
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
}
