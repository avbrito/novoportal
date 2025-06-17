"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import Layout from "@/app/components/Layout";

export default function SolicitacaoDetalhe() {
  const router = useRouter();

  const solicitacao = {
    id: "38457720240902808708",
    autorizacao: "38457720240902808708",
    nome: "Bruno Augusto Ferreira Leal",
  };

  const ocorrencias = [
    {
      dataHora: "2024-02-26T11:12:32",
      descricao: "Finalizado",
    },
    {
      dataHora: "2024-02-23T14:39:38",
      descricao: `Solicito autorização para os exames abaixo\nHemograma\nGlicose\n...`,
    },
    {
      dataHora: "2024-02-26T11:10:42",
      descricao:
        "Bom dia!\nProcedimentos liberados para execução na rede prestadora Unimed UDI, conforme rede contratada. Senha: 1109019061.",
    },
  ];

  const ocorrenciasOrdenadas = [...ocorrencias].sort(
    (a, b) => new Date(a.dataHora).getTime() - new Date(b.dataHora).getTime()
  );

  const formatarDataHora = (iso: string) => {
    const data = new Date(iso);
    return data.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <MenuProvider>
      <Layout>
        <div className="flex flex-col w-full max-w-2xl mx-auto p-6">
          <div
            className="h-[77px] px-8 py-6 flex items-center cursor-pointer"
            onClick={() => router.back()}
          >
            <ArrowLeftBlue />
            <h2 className="ml-4 text-2xl font-sans text-blue-black dark:text-white">
              Autorização {solicitacao.id}
            </h2>
          </div>
          <div className="h-[153px] p-8">
            <div className="mb-4">
              <p className="h-6 text-blue-regular font-sans font-medium dark:text-gray-200 text-sm">
                Número de autorização
              </p>
              <p className="text-verde-unimed font-sansBold text-lg">
                {solicitacao.autorizacao}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-blue-black font-sans font-medium dark:text-gray-200 text-sm">
                {solicitacao.nome}
              </p>
            </div>
          </div>
          <div className="px-8">
            {ocorrenciasOrdenadas.map((ocorrencia, index) => (
              <div
                key={index}
                className="mb-4 overflow-hidden rounded-lg border border-gray-200"
              >
                <table className="table-auto w-full text-left">
                  <thead>
                    <tr>
                      <th
                        colSpan={2}
                        className="h-13 px-4 text-blue-medium text-sm font-sans font-medium dark:text-gray-200"
                      >
                        Ocorrência {index + 1} de {ocorrencias.length} em{" "}
                        {formatarDataHora(ocorrencia.dataHora)}
                      </th>
                    </tr>
                  </thead>
                </table>
                <div className="border-t border-gray-200" />
                <table className="table-auto w-full text-left">
                  <tbody>
                    <tr>
                      <td
                        colSpan={2}
                        className="p-4 text-blue-black font-sans text-sm dark:text-white whitespace-pre-line"
                      >
                        {ocorrencia.descricao}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
}
