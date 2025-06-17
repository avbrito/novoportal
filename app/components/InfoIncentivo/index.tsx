'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "../../UserContext";
import { userPoints, pointsList } from "../../utils/const";
import { Check } from "@/app/components/Icons/Check";

interface Activity {
  name: string;
  date: string;
  points: string;
}

const InfoIncentivo = () => {
  const { userType } = useUserContext();
  const router = useRouter();

  const currentUserPoints =
    (userType && userPoints[userType]?.[0]?.userPontuacao) || "0";

  const currentPointsList: Activity[] = userType
    ? pointsList[userType] || []
    : [];

  const handleRedirect = () => {
    const currentPath = window.location.pathname;
    const beneficiosPath = `${currentPath}/Beneficios`;
    router.push(beneficiosPath);
  };

  return (
    <div className="p-4 bg-white">
      <div className="min-h-screen bg-white flex justify-center">
        <div className="p-8 bg-white w-full max-w-[808px] mx-auto">
          {/* Cabeçalho */}
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <h2 className="text-2xl font-sans text-gray-700">
              Programas de incentivo
            </h2>
            <select
              className="border-2 border-verde-unimed rounded-full text-verde-unimed px-3 py-2 text-sm"
              defaultValue="2024"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>

          {/* Cartão de pontos */}
          <div className="flex justify-between items-center bg-gray-card p-6 rounded-2xl border border-gray-borda">
            <div className="w-full">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-end space-x-4">
                  <img
                    src="/assets/imgs/medalha.png"
                    alt="Logo Unimed"
                    width={57}
                    height={57}
                  />
                  <div className="flex items-end text-6xl font-extra-bold text-verde-unimed font-sansSlab">
                    {currentUserPoints}
                    <p className="text-blue-black font-sans text-16px ml-2">
                      pontos
                    </p>
                  </div>
                </div>
                <div className="ml-auto">
                  <button
                    onClick={handleRedirect}
                    className="bg-verde-unimed text-white font-sans font-light px-3 py-3 rounded-lg text-sm"
                  >
                    Ver todos os benefícios
                  </button>
                </div>
              </div>

              <p className="text-lg text-verde-unimed mt-2 font-sansBold">
                Nível Bronze
              </p>
              <p className="text-sm text-blue-regular">
                próximo marco:{" "}
                <span className="font-semibold text-blue-black">
                  {parseInt(currentUserPoints) + 1}
                </span>
              </p>

              <hr className="my-4 border-t border-gray-borda w-full" />
              <p className="text-sm text-blue-dark">
                <span className="block">Recompensas:</span>
                <span className="inline-flex items-center mt-3 font-sans text-normal text-blue-black">
                  <Check className="mr-2" /> Seguro de vida
                </span>
              </p>
            </div>
          </div>

          {/* Lista de atividades */}
          <div className="mt-8">
            <h3 className="text-xl font-sans text-gray-700">
              Atividades e pontos
            </h3>
            <div className="space-y-4 mt-4">
              {currentPointsList.map((item: Activity, index: number) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 bg-gray-card rounded-2xl border border-gray-borda pb-4 pt-4 px-4"
                >
                  <div className="text-sm text-gray-700">
                    <p className="font-sans text-base font-extra-bold">
                      {item.name}
                    </p>
                    <p className="font-sans text-sm text-blue-regular">
                      {item.date}
                    </p>
                  </div>
                  <span className="font-sansSlab font-bold text-verde-unimed text-3xl flex items-end">
                    {item.points}
                    <p className="text-blue-medium text-sm font-normal ml-1">
                      pts
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoIncentivo;
