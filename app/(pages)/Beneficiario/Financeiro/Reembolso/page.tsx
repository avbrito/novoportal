"use client";

import { useRouter } from "next/navigation";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import Layout from "@/app/components/Layout";
import { REEMBOLSO_DATA } from "@/app/utils/const";

export default function Reembolso() {
  const router = useRouter();

  return (
    <MenuProvider>
      <Layout>
        <div className="flex flex-col items-left w-full max-w-4xl mx-auto mt-10 p-4">
          <div className="flex items-center w-full mb-6">
            <div
              onClick={() => router.push("/Beneficiario")}
              className="cursor-pointer"
            >
              <ArrowLeftBlue />
            </div>
            <h2 className="ml-2 text-2xl text-blue-black dark:text-white font-sans">
              Reembolso
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
            Acompanhe o reembolso de consultas realizadas
          </p>
          <div
            className="w-96 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 cursor-pointer"
            onClick={() =>
              router.push(
                "/Beneficiario/Financeiro/Reembolso/SolicitacaoDetalhe"
              )
            }
          >
            <div className="flex justify-between items-center p-4">
              <span className="text-gray-500 dark:text-gray-400">
                {REEMBOLSO_DATA[0].date}
              </span>
              <span
                className={`
      flex items-center text-sm font-semibold px-2 py-1 rounded-lg  ml-4
      ${
        REEMBOLSO_DATA[0].status === "Aprovado"
          ? "text-green-600 bg-green-100"
          : REEMBOLSO_DATA[0].status === "Negado"
          ? "text-red-600 bg-red-100"
          : "text-orange-700 bg-orange-warning"
      }
    `}
              >
                <span
                  className={`
        w-2 h-2 rounded-full mr-1
        ${
          REEMBOLSO_DATA[0].status === "Aprovado"
            ? "bg-green-600"
            : REEMBOLSO_DATA[0].status === "Negado"
            ? "bg-red-600"
            : "bg-orange-status-analise"
        }
      `}
                ></span>
                {REEMBOLSO_DATA[0].status}
              </span>
            </div>
            <hr className="w-full" />
            <p className="text-green-600 dark:text-green-400 text-2xl font-bold p-4">
              {REEMBOLSO_DATA[0].amount}
            </p>
            <p className="text-gray-600 dark:text-gray-400 px-4 pb-4">
              {REEMBOLSO_DATA[0].user}
            </p>
          </div>
          <button
            className="mt-10 bg-verde-unimed hover:bg-green-700 text-white text-lg font-sans py-2 px-6 rounded-lg w-fit"
            onClick={() =>
              router.push(
                "/Beneficiario/Financeiro/Reembolso/SolicitarReembolso"
              )
            }
          >
            Solicitar reembolso
          </button>
        </div>
      </Layout>
    </MenuProvider>
  );
}
