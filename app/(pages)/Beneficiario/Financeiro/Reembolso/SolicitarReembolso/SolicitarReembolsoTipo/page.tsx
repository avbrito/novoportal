'use client';

import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/Layout";
import Link from "next/link";
import { CarteirinhaIcon } from "@/app/components/Icons/CarteirinhaIcon";
import { ArrowLeft } from "@/app/components/Icons/ArrowLeft";
import { ArrowRightBlack } from "@/app/components/Icons/ArrowRightBlack";
import RadioList from "@/app/components/RadioList";
import SearchEspecialidade from "@/app/components/SearchEspecialidade";

const beneficiarios = [
  { nome: "Bruno Leal", numero: "014 000000000 0" },
  { nome: "Letícia Ramos", numero: "4 125 000000000 8" },
];

export default function SolicitarReembolsoTipo() {
  const router = useRouter();

  return (
    <MenuProvider>
      <Layout>
        <div className="min-h-screen bg-white dark:bg-verde-dark p-6 flex mr-5 items-start">
          <div className="w-full max-w-md">
            <Link
              href="/reembolso"
              className="text-blue-500 flex items-center text-sm mb-6"
            >
              <span className="mr-2">&larr;</span>
              <span className="text-blue-500">Reembolso</span>
              <span className="text-blue-500"> &gt; Beneficiário</span>
              <span className="text-blue-500"> &gt; Tipo de despesa</span>
              <span className="text-gray-400"> &gt; Especialidade</span>
            </Link>
            <div className="flex items-center w-full mb-2">
              <div
                onClick={() => router.push("/Beneficiario")}
                className="cursor-pointer"
              >
                <ArrowLeftBlue />
              </div>
              <h2 className="ml-2 text-2xl text-blue-black dark:text-white font-sans">
                Tipo de despesa
              </h2>
            </div>
            <RadioList />
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
}
