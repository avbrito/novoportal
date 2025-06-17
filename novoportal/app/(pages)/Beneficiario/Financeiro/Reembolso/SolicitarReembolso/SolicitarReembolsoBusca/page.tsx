'use client';

import React from 'react';
import { MenuProvider } from "../../../../../../components/Context/MenuContext";
import { ArrowLeftBlue } from "../../../../../../components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";
import Layout from "../../../../../../components/Layout";
import Link from "next/link";
import SearchEspecialidade from "../../../../../../components/SearchEspecialidade";

const beneficiarios = [
  { nome: "Bruno Leal", numero: "014 000000000 0" },
  { nome: "Letícia Ramos", numero: "4 125 000000000 8" },
];

export default function SolicitarReembolsoBusca() {
  const router = useRouter();

  return (
    <MenuProvider>
      <Layout>
        <div className="min-h-screen bg-white p-6 flex justify-center items-start">
          <div className="w-full max-w-md">
            <Link
              href="/reembolso"
              className="text-blue-500 flex items-center text-sm mb-6"
            >
              <span className="mr-2">&larr;</span>
              <span className="text-blue-500">Reembolso</span>
              <span className="text-gray-400"> &gt; Beneficiário</span>
            </Link>
            <div className="flex items-center w-full mb-6">
              <div
                onClick={() => router.push("/Beneficiario")}
                className="cursor-pointer"
              >
                <ArrowLeftBlue />
              </div>
              <h2 className="ml-2 text-2xl text-blue-black dark:text-white font-sans">
                Solicitar reembolso
              </h2>
            </div>
            <SearchEspecialidade />
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
}
