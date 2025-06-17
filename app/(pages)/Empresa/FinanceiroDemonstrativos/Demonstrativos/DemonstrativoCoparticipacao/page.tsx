"use client";

import { MenuProvider } from "@/app/components/Context/MenuContext";
import Layout from "@/app/components/Layout";
import React, { useState } from "react";

const DemonstrativoCoparticipacao = () => {
  const [formato, setFormato] = useState("PDF");
  const [retroativo, setRetroativo] = useState("");

  return (
    <MenuProvider>
      <Layout>
        <div className="max-w-lg mx-auto p-6">
          <h1 className="text-3xl font-sans text-black dark:text-white">
            Relatório de Coparticipação
          </h1>
          <p className="w-full text-blue-medium text-sm mt-3 mb-10 dark:text-gray-300">
            Confira os valores cobrados por serviços utilizados, detalhados em seu demonstrativo de coparticipação.
          </p>

          <label className="block font-medium text-blue-black dark:text-white mb-3">Contrato*</label>
          <select className="w-full border rounded-xl mb-4 text-blue-black border-gray-borda border-3 p-4">
            <option>25249</option>
          </select>

          <label className="block font-medium text-blue-black dark:text-white mb-3">
            Competência*
          </label>
          <input
            type="text"
            placeholder="MM/AA"
            className="w-full border rounded-xl border-3 text-blue-regular border-gray-borda p-4 mb-4"
          />

          <label className="block font-medium text-blue-black dark:text-white mb-3">
            Número da Nota Fiscal
          </label>
          <input
            type="text"
            placeholder="000.000.000-00"
            className="w-full rounded-xl border-3 border-gray-borda p-4 mb-4"
          />

          <label className="block font-medium text-blue-black dark:text-white mb-3">
            Tipo de Detalhamento
          </label>
          <div className="flex flex-col items-left gap-4 mb-4">
            <label className="flex items-center gap-2 text-blue-black dark:text-white">
              <input
                type="radio"
                name="formato"
                value="PDF"
                checked={formato === "PDF"}
                onChange={() => setFormato("PDF")}
                className="form-radio text-green-500 border-3 border-gray-borda"
              />
              Resumo Geral dos Custos
            </label>
            <label className="flex items-center gap-2 text-blue-black dark:text-white">
              <input
                type="radio"
                name="formato"
                value="Excel"
                checked={formato === "Excel"}
                onChange={() => setFormato("Excel")}
                className="form-radio text-green-500 border-3 border-gray-borda"
              />
              Detalhamento por Adesões
            </label>
          </div>


          <button className="w-2/5 bg-green-500 text-white p-2 mt-8 rounded-xl">
            Consultar
          </button>
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default DemonstrativoCoparticipacao;
