"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import Layout from "@/app/components/Layout";
import { Atendimento } from "@/app/components/Icons/Atendimento";

export default function SolicitacaoDetalhe() {
  const router = useRouter();

  const solicitacao = {
    id: "42425648787",
    autorizacao: "42425648787",
    especialidade: "Psiquiatra",
    valor: "R$ 170,00",
    medico: "Dra. Tatiane Caroline",
    procedimento: "20/03/2024",
    pedido: "21/03/2024",
    prazo: "5 dias",
    status: "Em Análise",
  };

  return (
    <MenuProvider>
      <Layout>
        <div className="flex flex-col w-full max-w-2xl mx-auto p-6">
          <div
            className="flex items-center cursor-pointer mb-4"
            onClick={() => router.back()}
          >
            <ArrowLeftBlue />
            <h2 className="ml-2 text-xl font-sans text-blue-black dark:text-white">
              Solicitação {solicitacao.id}
            </h2>
          </div>

          <div className="mb-4">
            <p className="text-gray-500 dark:text-gray-200 text-sm">
              Número de autorização
            </p>
            <p className="text-verde-unimed font-bold text-sm">
              {solicitacao.autorizacao}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-lg font-semibold text-blue-black dark:text-gray-100">
              {solicitacao.especialidade}
            </p>
            <p className="text-lg font-sans text-gray-800 dark:text-gray-200">
              {solicitacao.valor}
            </p>
            <p className="text-gray-600 dark:text-gray-200 text-sm">
              {solicitacao.medico}
            </p>
          </div>

          <div className="flex items-center mb-4">
            <span
              className={`
                flex items-center text-sm font-semibold px-2 py-1 rounded-lg 
                ${
                  solicitacao.status === "Aprovado"
                    ? "text-green-600 bg-green-100"
                    : solicitacao.status === "Negado"
                    ? "text-red-600 bg-red-100"
                    : "text-orange-700 bg-orange-warning"
                }
              `}
            >
              <span
                className={`
                  w-2 h-2 rounded-full mr-1
                  ${
                    solicitacao.status === "Aprovado"
                      ? "bg-green-600"
                      : solicitacao.status === "Negado"
                      ? "bg-red-600"
                      : "bg-orange-status-analise"
                  }
                `}
              ></span>
              {solicitacao.status}
            </span>
          </div>

          <div className="text-gray-600 dark:text-gray-200 text-sm space-y-1 mb-4">
            <p>
              <span className="font-semibold">Procedimento:</span> <br />
              {solicitacao.procedimento}
            </p>
            <p>
              <span className="font-semibold">Pedido de reembolso:</span> <br />
              {solicitacao.pedido}
            </p>
            <p>
              <span className="font-semibold">Tempo máximo de resposta:</span>{" "}
              <br />
              {solicitacao.prazo}
            </p>
          </div>

          <button className="text-left flex flex-row bg-transparent text-blue-link text-sm font-sans py-2 rounded-md mb-6">
            <Atendimento />
            Solicitar atendimento
          </button>

          <hr className="border-dashed border-gray-300 my-4" />

          <div className="flex items-center">
            <p className="text-gray-600 dark:text-gray-200 text-sm">DAS-PAGME-5123...</p>
            <span className="ml-2 text-red-500 text-xs font-semibold bg-red-100 px-2 py-1 rounded-md">
              PDF
            </span>
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
}
