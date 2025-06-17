"use client";

import { MenuProvider } from "@/app/components/Context/MenuContext";
import Layout from "@/app/components/Layout";
import React, { useState } from "react";

const DemonstrativoCustoOperacional = () => {
  const [formato, setFormato] = useState("PDF");
  const [retroativo, setRetroativo] = useState("");

  return (
    <MenuProvider>
      <Layout>
        <div className="max-w-xl mx-auto p-6">
          <h1 className="text-3xl font-sans text-black dark:text-white">
            Demonstrativo de Custo Operacional
          </h1>
          <p className="w-full text-blue-medium dark:text-gray-300 text-sm mt-3 mb-10">
            Obtenha um relatório detalhado com os custos operacionais relacionados ao seu contrato.
          </p>

          <label className="block font-medium text-blue-black dark:text-white mb-3">Contrato*</label>
          <select className="w-full border rounded-xl mb-4 text-gray-700 border-gray-borda border-3 p-4">
            <option>25249</option>
          </select>

          <label className="block font-medium text-blue-black dark:text-white mb-3">
            Deseja contemplar os períodos retroativos?
          </label>
          <div className="flex flex-col items-left gap-4 mb-4">
            <label className="flex items-center gap-2 text-blue-black dark:text-white">
              <input
                type="radio"
                name="retroativo"
                value="Sim"
                checked={retroativo === "Sim"}
                onChange={() => setRetroativo("Sim")}
                className="form-radio text-green-500 border-3 border-gray-borda"
              />
              Sim
            </label>
            <label className="flex items-center gap-2 text-blue-black dark:text-white">
              <input
                type="radio"
                name="retroativo"
                value="Não"
                checked={retroativo === "Não"}
                onChange={() => setRetroativo("Não")}
                className="form-radio text-green-500 border-3 border-gray-borda"
              />
              Não, apenas o mês vigente
            </label>
          </div>

          <label className="block font-medium text-blue-black dark:text-white mb-3">
            Competência*
          </label>
          <input
            type="text"
            placeholder="MM/AA"
            className="w-full border rounded-xl border-3 text-gray-700 border-gray-borda p-4 mb-4"
          />

          <label className="block font-medium text-blue-black dark:text-white mb-3">
            Número da Nota Fiscal
          </label>
          <input
            type="text"
            placeholder="000.000.000-00"
            className="w-full rounded-xl border-3 border-gray-borda p-4 mb-4"
          />

          {formato === "Excel" && (
            <>
              <label className="block font-medium text-blue-black mb-3">
                Uso indevido
              </label>
              <select className="w-full border rounded-xl border-3 border-gray-borda p-4 mb-4 text-gray-700">
                <option>Selecione</option>
              </select>

              <label className="block font-medium text-blue-black mb-3">
                Tipo de arquivo de saída
              </label>
              <select className="w-full border rounded-xl border-3 border-gray-borda p-4 mb-4 text-gray-700">
                <option>Selecione</option>
              </select>

              <label className="block font-medium text-blue-black mb-3">
                Layout
              </label>
              <select className="w-full border rounded-xl border-3 border-gray-borda p-4 mb-4 text-gray-700">
                <option>Selecione</option>
              </select>

              <label className="block font-medium text-blue-black mb-3">
                Tipo de fatura
              </label>
              <select className="w-full border rounded-xl border-3 border-gray-borda p-4 mb-4 text-gray-700">
                <option>Selecione</option>
              </select>
            </>
          )}

          <label className="block font-medium text-blue-black dark:text-white mb-3">
            Número do boleto
          </label>
          <input
            type="text"
            placeholder="00000.00000"
            className="w-full text-gray-700 rounded-xl border-3 border-gray-borda p-4 mb-4"
          />

          <label className="block font-medium text-blue-black dark:text-white mb-3">
            Quebra de página por adesão
          </label>
          <select className="w-full rounded-xl border-3 border-gray-borda p-4 mb-4  text-gray-700">
            <option>Sim</option>
            <option>Não</option>
          </select>

          <button className="w-2/5 bg-green-500 text-white p-2 mt-8 rounded-xl">
            {formato === "Excel" ? "Gerar Excel" : "Gerar PDF"}
          </button>
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default DemonstrativoCustoOperacional;
