"use client";

import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { Search } from "@/app/components/Icons/Search";
import Layout from "@/app/components/Layout";
import MedicalListing from "@/app/components/MedicalListComponent";
import { cardData, logoInfo } from "@/app/utils/const";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const userType = "pessoaFisica"; 

const GuiaMedicoPage = () => {
  const [userCards, setUserCards] = useState<any[]>([]);
  const [solicitacao, setSolicitacao] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userType) {
      setUserCards(cardData[userType] || []);
    } else {
      setUserCards([]);
    }
  }, [userType]);

  const handleSolicitacao = async () => {};

    const router = useRouter();
  
    const handleRedirect = () => {
      router.back();
    };

  return (
    <MenuProvider>
      <React.Fragment>
        <Layout>
          <div className="flex items-center space-x-2 m-4">
            <span className="flex items-center gap-2 text-xl font-sans text-blue-black cursor-pointer" onClick={handleRedirect}>
              <ArrowLeftBlue />
              Guia Médico
            </span>
          </div>
          <div className="flex items-center space-x-2 m-4">
            <span className="flex items-center text-ls font-sans text-blue-black">
              Legenda para os ícones dos atributos de qualificação dos prestadores do serviço na saúde suplementar:
            </span>
          </div>
          <div className="flex flex-col items-center space-x-2 m-4">            

            <div className="flex flex-wrap justify-between items-start w-full mt-4 mb-6">
              {
                logoInfo.map(({ id, src: Icon, title }) => (
                  <div key={id} className="flex flex-col items-center text-center px-2 mb-4" style={{ width: '8%', minWidth: '80px' }}>
                    <div style={{ width: "23px", height: "23px" }} className="mb-2">
                      <Icon className="w-8 h-8" />
                    </div>
                    <p className="text-xs text-center font-sans text-blue-black" >{title}</p>
                  </div>
                ))
              }
            </div>
            

            <div className="p-4 bg-white dark:bg-verde-dark flex justify-start w-full">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Busque por hospitais, médicos e especialidades"
                  onChange={(e) => setSolicitacao(e.target.value)}
                  className="min-w-80 border-2 text-blue-black border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:border-green-500"
                />
                <button
                  onClick={handleSolicitacao}
                  disabled={loading || !solicitacao}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg disabled:bg-verde-unimed flex items-center space-x-2 h-11"
                >
                  {loading ? (
                    "Carregando..."
                  ) : (
                    <>
                      <Search /> <span>Buscar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            <MedicalListing />
          </div>
        </Layout>
      </React.Fragment>
    </MenuProvider>
  );
};

export default GuiaMedicoPage;
