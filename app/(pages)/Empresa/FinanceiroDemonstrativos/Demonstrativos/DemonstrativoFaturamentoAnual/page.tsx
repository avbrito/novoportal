"use client";

import { MenuProvider } from "@/app/components/Context/MenuContext";
import Layout from "@/app/components/Layout";
import { demonstrativoData } from "@/app/utils/const";
import React, { useState } from "react";

const DemonstrativoFaturamentoAnual = () => {
  const [formato, setFormato] = useState("PDF");
  const [showTable, setShowTable] = useState(false);

  const handleVisualizarClick = () => {
    setShowTable(true);
  };

  return (
    <MenuProvider>
      <Layout>
        <div className="flex justify-center min-h-screen items-start px-4 py-10 mx-4">
          <div className="max-w-lg mx-auto p-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Demonstrativo de Faturamento Anual
            </h1>
            <p className="text-sm text-gray-600 mt-2 mb-6">
              Selecione o contrato para visualização do demonstrativo
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-blue-black font-medium mb-2">Ano</label>
                <select className="w-48 border rounded-xl p-3 border-gray-300 text-blue-black">
                  <option>2024</option>
                </select>
              </div>
              <div>
                <label className="block text-blue-black font-medium mb-2">Contrato</label>
                <select className="w-48 border rounded-xl p-3 border-gray-300 text-blue-black">
                  <option>29249</option>
                </select>
              </div>
              <div>
                <label className="block text-blue-black font-medium mb-2">Beneficiário</label>
                <select className="w-48 border rounded-xl p-3 border-gray-300 text-blue-black">
                  <option>Todos</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleVisualizarClick}
              className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
            >
              Visualizar
            </button>

            {showTable && (
              <>
                <div className="flex flex-wrap gap-4 mt-10">
                  <button className="bg-white border border-green-600 text-green-700 px-4 py-2 rounded-md flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 7H7v6H4l6 6 6-6h-3V7z" />
                    </svg>
                    Baixar como PDF
                  </button>
                  <button className="bg-white border border-green-600 text-green-700 px-4 py-2 rounded-md flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 7H7v6H4l6 6 6-6h-3V7z" />
                    </svg>
                    Baixar como Excel
                  </button>
                </div>

                <div className="mt-6 overflow-x-auto rounded-lg shadow border">
                  <table className="min-w-full text-sm text-left">
                    <thead className="bg-green-900 text-white">
                      <tr>
                        <th className="px-4 py-3 font-semibold">COMP FINANCEIRA</th>
                        <th className="px-4 py-3 font-semibold">EMPRESA</th>
                        <th className="px-4 py-3 font-semibold">CNPJ</th>
                        <th className="px-4 py-3 font-semibold">MATRÍCULA</th>
                        <th className="px-4 py-3 font-semibold">CARTÃO</th>
                        <th className="px-4 py-3 font-semibold">VALOR</th>
                        <th className="px-4 py-3 font-semibold">CPF</th>
                        <th className="px-4 py-3 font-semibold">DEPENDENTE</th>
                        <th className="px-4 py-3 font-semibold">PARENTESCO</th>
                        <th className="px-4 py-3 font-semibold">TITULAR</th>
                        <th className="px-4 py-3 font-semibold">DATA EMISSÃO NF</th>
                        <th className="px-4 py-3 font-semibold">CODIGO</th>
                        <th className="px-4 py-3 font-semibold">NOTA FISCAL</th>
                        <th className="px-4 py-3 font-semibold">DATA DE NASCIMENTO</th>
                        <th className="px-4 py-3 font-semibold">CLASSE PEDIDO</th>
                        <th className="px-4 py-3 font-semibold">TOTAL BRUTO</th>
                      </tr>
                    </thead>
                    <tbody className="bg-green-50 text-green-900">
                      {demonstrativoData.map((item, idx) => (
                        <tr key={idx}>
                          <td className="px-4 py-2">{item.compFinanceira}</td>
                          <td className="px-4 py-2">{item.empresa}</td>
                          <td className="px-4 py-2">{item.cnpj}</td>
                          <td className="px-4 py-2">{item.matricula}</td>
                          <td className="px-4 py-2">{item.cartao}</td>
                          <td className="px-4 py-2">{item.valor}</td>
                          <td className="px-4 py-2">{item.cpf}</td>
                          <td className="px-4 py-2">{item.dependente}</td>
                          <td className="px-4 py-2">{item.parentesco}</td>
                          <td className="px-4 py-2">{item.titular}</td>
                          <td className="px-4 py-2">{item.dataEmissao}</td>
                          <td className="px-4 py-2">{item.codigo}</td>
                          <td className="px-4 py-2">{item.notaFiscal}</td>
                          <td className="px-4 py-2">{item.dataNascimento}</td>
                          <td className="px-4 py-2">{item.classePedido}</td>
                          <td className="px-4 py-2">{item.totalBruto}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default DemonstrativoFaturamentoAnual;
