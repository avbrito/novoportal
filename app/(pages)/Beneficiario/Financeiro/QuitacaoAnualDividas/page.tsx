"use client";

import React, { useEffect, useState } from "react";
import Layout from "../../../../components/Layout";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import { pagamentos } from "../../../../utils/const";
import { CopiarPix } from "@/app/components/Icons/CopiarPix";
import { SegundaViaPix } from "@/app/components/Icons/SegundaViaPix";
import { Pix } from "@/app/components/Icons/Pix";
import Link from "next/link"; 

export default function SegundaViaBoleto() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <MenuProvider>
      <Layout>
        <div className="bg-white dark:bg-verde-dark p-4">
          <div className="flex flex-col bg-white dark:bg-verde-dark justify-center items-center">
            <div className="pt-2 bg-white dark:bg-verde-dark w-full max-w-4xl">
              <h1 className="text-2xl text-blue-black dark:text-gray-300 font-sans mb-10">
                Pagamentos
              </h1>
              <div className="border text-red-erro border-red-erro rounded-lg p-4 -mt-5 mb-5 flex justify-between items-center">
                <p>Identificamos um ou mais boletos em atraso</p>
                <Link href="/Beneficiario/Financeiro/QuitacaoAnualDividas/Negociar">
                  <button className="bg-red-erro text-sm text-white px-4 py-1 rounded-full">
                    <p>Negociar</p>
                  </button>
                </Link>
              </div>
              {pagamentos.map((categoria) => (
                <div key={categoria.status} className="mb-8">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-gray-300 mb-4">
                    {categoria.status}
                  </h2>
                  <div className="space-y-4">
                    {categoria.items.map((item, index) => (
                      <div
                        key={index}
                        className="border border-gray-300 rounded-lg p-4 flex justify-between items-center"
                      >
                        <div>
                          <span
                            className={`flex items-baseline text-sm font-sansBold align-baseline ${item.color} mb-2`}
                          >
                            <p className="text-xl mr-1">•</p>
                            {item.label}
                          </span>
                          <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                            {item.valor}
                          </p>
                          <p className="text-sm text-gray-500">{item.data}</p>
                          {item.multa && (
                            <p className="text-sm text-gray-500">
                              {item.multa}
                            </p>
                          )}
                        </div>
                        <div className="flex space-x-4">
                          <Link href="/Beneficiario/Financeiro/QuitacaoAnualDividas/Pix">
                            <button className="text-blue-500 font-sans text-sm hover:underline">
                              <Pix />
                              PIX
                            </button>
                          </Link>
                          <Link href="/Beneficiario/Financeiro/QuitacaoAnualDividas/Boleto">
                            <button className="text-blue-500 font-sans text-sm hover:underline">
                              <CopiarPix />
                              Boleto
                            </button>
                          </Link>
                          <a href="https://link.testfile.org/PDF10MB" target="_blank">
                            <button className="text-blue-500 font-sans text-sm hover:underline">
                              <SegundaViaPix />
                              2a via
                            </button>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
}
