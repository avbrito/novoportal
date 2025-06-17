"use client";

import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/Layout";
import Link from "next/link";
import FormReembolso from "@/app/components/FormReembolso";

const beneficiarios = [
  { nome: "Bruno Leal", numero: "014 000000000 0" },
  { nome: "Letícia Ramos", numero: "4 125 000000000 8" },
];

export default function FormularioReembolso() {
  const router = useRouter();

  return (
    <MenuProvider>
      <Layout>
        <div className="min-h-screen bg-white dark:bg-verde-dark p-6 flex flex-col lg:flex-row ml-5 items-start overflow-auto">
          <div className="w-full max-w-lg lg:w-1/2 flex-grow">
          <Link
              href="/reembolso"
              className="text-blue-500 flex items-center text-sm mb-6"
            >
              <span className="text-blue-500 pr-1">Reembolso </span>
              <span className="text-blue-500 pr-1"> &gt; Beneficiário</span>
              <span className="text-blue-500 pr-1"> &gt; Tipo de despesa</span>
              <span className="text-blue-500 pr-1"> &gt; Especialidade</span>
              <span className="text-gray-400"> &gt; Seus dados</span>
            </Link>
            <div className="flex items-center w-full mb-4 text-blue-black dark:text-white text-2xl">
              <div
                onClick={() => router.push("/Beneficiario")}
                className="cursor-pointer mr-2"
              >
                <ArrowLeftBlue />
              </div>
              Seus dados
            </div>
            
            <FormReembolso />
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
}
