'use client';

import { MenuProvider } from "@/app/components/Context/MenuContext";
import Layout from "@/app/components/Layout";
import React, { useEffect, useState } from "react";

const CalendarioMovimentacao = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    setIsIframeLoaded(true); 
  }, []);

  return (
    <MenuProvider>
      <Layout>
        <div className="min-h-screen flex flex-col items-left justify-start py-8 px-4 bg-white dark:bg-verde-dark dark:text-white">
          <div className="text-left">
            <h1 className="text-2xl font-sans text-blue-black dark:text-white mb-10">
              Calendário de Movimentação Cadastral PJ
            </h1>
            <h2 className="text-lg font-sans text-black dark:text-white">
              Calendário 2025
            </h2>
          </div>

          <div className="w-full max-w-6xl mt-8">
            {isIframeLoaded && (
              <iframe
              src="https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2025/01/Cronograma-SITE-Vigencias-01-10-20.pdf#toolbar=0"
              title="Cronograma Vigências 2025"
              className="w-full h-[800px] border border-gray-300 dark:border-gray-800 rounded-md shadow-md"
            ></iframe>
            )}
          </div>

          <h3 className="text-lg font-semibold text-black dark:text-white mt-8">..
            Legendas
          </h3>

          <div className="mt-4 row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-l-8  border-2 border-blue-lightest border-l-verde-claro p-4 bg-gray-card dark:bg-cinza-dark dark:border-gray-800 dark:border-l-verde-claro rounded-md">
              <p className="text-lg font-sans text-blue-black dark:text-white">
                Faturamento de Consultas/SADTs (executados online) | Unimed
                Uberlândia e Intercâmbio
              </p>
            </div>
            <div className="border-l-8 border-2 border-blue-lightest mt-4 border-l-orange-unimed p-4 bg-gray-card dark:bg-cinza-dark dark:border-gray-800 dark:border-l-orange-unimed rounded-md">
              <p className="text-lg font-sans text-blue-black dark:text-white">
                Disponibilização do Espelho de Produção
              </p>
            </div>
            <div className="border-l-8 border-2 mt-4 border-blue-lightest border-l-verde-unimed p-4 bg-gray-card dark:bg-cinza-dark dark:border-gray-800 dark:border-l-verde-unimed rounded-md">
              <p className="text-lg font-sans text-blue-black dark:text-white">
                Pagamento de Produção
              </p>
            </div>
          </div>
        </div>
        </Layout>
        </MenuProvider>
  );
};

export default CalendarioMovimentacao;
