"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import Layout from "@/app/components/Layout";
import { COMPETENCIAS, RESULTADOS } from "@/app/utils/const";
import { ArrowDownWhite } from "@/app/components/Icons/ArrowDownWhite";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Extratos() {
  const router = useRouter();
  const [selectedCompetencia, setSelectedCompetencia] = useState(
    COMPETENCIAS[0]
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSelect = (competencia) => {
    setSelectedCompetencia(competencia);
    setDropdownOpen(false);
  }; 

  return (
    <MenuProvider>
      <Layout>
        <div className="flex flex-col items-center w-full max-w-[808px] mx-auto mt-10 p-4">
          <div className="flex items-center w-full mb-6">
            <div
              onClick={() => router.push("/Beneficiario")}
              className="cursor-pointer"
            >
              <ArrowLeftBlue />
            </div>
            <h2 className="ml-2 text-2xl text-blue-black dark:text-white font-sans">
              Extrato
            </h2>
          </div>

          <div className="block items-center justify-between w-full bg-white dark:bg-verde-dark p-4 rounded-md mb-6 relative">
            <label className="text-gray-700 dark:text-white font-medium">
              Selecione a competência
            </label>
            <div className="flex items-center mt-4">
              <input
                type="text"
                value={selectedCompetencia}
                className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-l-lg border-gray-unimed border-2 p-2"
                readOnly
              />
              <button
                onClick={toggleDropdown}
                className="w-14 bg-green-500 text-white pl-4 py-2.5 rounded-r-lg"
              >
                <ArrowDownWhite />
              </button>
            </div>

            {dropdownOpen && (
              <div className="mt-2 w-[265px] bg-white border text-blue-black border-gray-300 rounded-xl">
                {COMPETENCIAS.map((competencia) => (
                  <div
                    key={competencia}
                    onClick={() => handleSelect(competencia)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  >
                    {competencia}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full ml-7 mb-4 text-blue-regular dark:text-white font-sans text-sm">
            Resultado {selectedCompetencia}
          </div>

          <div className="w-full space-y-4">
            {RESULTADOS[selectedCompetencia] &&
            RESULTADOS[selectedCompetencia].length > 0 ? (
              RESULTADOS[selectedCompetencia].map((item, index) => (
                <div
                  key={index}
                  className="w-96 bg-white dark:bg-gray-800 px-4 rounded-md space-y-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-blue-black dark:text-white">
                        {item.titulo}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.descricao}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Código de serviço: {item.codigo}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.data}
                      </p>
                    </div>
                    <div className="text-right font-bold text-blue-black dark:text-white">
                      {item.valor}
                    </div>
                  </div>
                  <hr className="border-t border-gray-unimed dark:border-gray-700" />
                </div>
              ))
            ) : (
              <div className="ml-4 text-left text-gray-600 dark:text-gray-400 mt-4">
                Não foram encontrados extratos referente ao período selecionado.
                <DotLottieReact
                  style={{
                    width: "400px",
                    height: "250px",
                    justifyContent: "center",
                  }}
                  src="https://lottie.host/a9627d9d-9124-4ce9-b14e-071033fb5806/IhBDVAqCwm.lottie"
                  loop
                  autoplay
                />
                {/* <DotLottieReact style={{width: "400px", height: "250px", justifyContent: "center"}}
                  src="https://lottie.host/905964eb-a31b-4bde-92df-0b5490a612cc/bRRJk3HNqg.lottie"
                  loop
                  autoplay
                /> */}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
}
