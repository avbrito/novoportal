"use client";

import { MenuProvider } from "@/app/components/Context/MenuContext";
import Layout from "@/app/components/Layout";
import React, { useState } from "react";

const DemonstrativoRecomposicao = () => {
  const [formato, setFormato] = useState("PDF");
  const [retroativo, setRetroativo] = useState("");

  return (
    <MenuProvider>
      <Layout>
        <div className="max-w-lg mx-auto p-6">
          <h1 className="text-3xl font-sans text-black dark:text-white">
            Demonstrativo de Recomposição PJ
          </h1>
          <p className="w-full text-blue-medium dark:text-gray-300 text-sm mt-3 mb-10">
            Confira os valores cobrados por serviços utilizados, detalhados em
            seu demonstrativo de coparticipação.
          </p>

          <label className="block font-medium text-blue-black dark:text-white mb-3">Ano</label>
          <select className="w-full border rounded-xl mb-4 text-blue-black border-gray-borda border-3 p-4">
            <option>2024</option>
          </select>

          <label className="block font-medium text-blue-black dark:text-white mb-3">
            Contrato
          </label>
          <select className="w-full border rounded-xl mb-4 text-blue-black border-gray-borda border-3 p-4">
            <option>29249</option>
          </select>

          <button className="w-2/5 bg-green-500 text-white p-2 mt-8 rounded-xl">
            Gerar PDF
          </button>
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default DemonstrativoRecomposicao;
