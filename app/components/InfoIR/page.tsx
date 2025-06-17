"use client";

import React, { useState } from "react";
import { useUserContext } from "../../UserContext";
import { levels, userPoints, dataFaturamento } from "../../utils/const";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";
import { Calendario } from "../Icons/Calendario";
import { ArrowDown } from "../Icons/ArrowDown";

const InfoIR = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] =
    useState<keyof typeof dataFaturamento>("Maio");
  const { userType } = useUserContext();
  const router = useRouter();

  const userScore = userType
    ? parseInt(userPoints[userType]?.[0]?.userPontuacao || "0")
    : 0;

  const currentLevel = levels.find((level) => {
    if (Array.isArray(level.range)) {
      return userScore >= level.range[0] && userScore <= level.range[1];
    } else {
      return userScore >= parseInt(level.range);
    }
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleRedirect = () => {
    router.back();
  };

  return (
    <div className="p-4 bg-white">
      <div className="min-h-screen bg-white">
        <div className="p-8 bg-white rounded-lg max-w-[808px] mx-auto">
          <div className="flex items-center mb-6">
            <span className="mt-1 cursor-pointer" onClick={handleRedirect}>
              <ArrowLeftBlue />
            </span>
            <h1 className="text-2xl font-sans text-blue-black pl-2">
              Imposto de renda
            </h1>
          </div>

          <div className="flex items-center justify-start mb-6">
            <label
              className="flex items-center px-4 py-2 rounded-full bg-gray-200 text-blue-black font-sans text-sm mr-3 cursor-pointer"
              onClick={handleOpenModal}
            >
              <Calendario />
              Período
              <ArrowDown />
            </label>
            <div className="flex space-x-3">
              {Object.keys(dataFaturamento).map((period, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setSelectedPeriod(period as keyof typeof dataFaturamento)
                  }
                  className={`px-4 py-2 rounded-full ${
                    period === selectedPeriod
                      ? "bg-verde-unimed text-gray-card font-semibold"
                      : "bg-blue-lightest text-blue-regular"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg left-0 w-96">
            <h2 className="text-gray-700 font-semibold pl-2 pb-2">
              Informe de rendimento Ano de declaração
            </h2>

            <ul className="text-blue-black pl-2">
              <li className="text-blue-link font-sans pb-5 cursor-pointer">
                2024
              </li>
              <li className="text-blue-link font-sans pb-5 cursor-pointer">
                2023
              </li>
              <li className="text-blue-link font-sans pb-5 cursor-pointer">
                2022
              </li>
              <li className="text-blue-link font-sans pb-5 cursor-pointer">
                2021
              </li>
              <li className="text-blue-link font-sans pb-5 cursor-pointer">
                2020
              </li>
            </ul>

            <h2 className="text-gray-700 font-semibold pl-2 pb-2 pt-2">
              Demonstrativos de gastos do plano de saúde
            </h2>
            <ul className="text-blue-black pl-2">
              <li className="text-blue-link font-sans pb-5 cursor-pointer">
                2024
              </li>
              <li className="text-blue-link font-sans pb-5 cursor-pointer">
                2023
              </li>
              <li className="text-blue-link font-sans pb-5 cursor-pointer">
                2022
              </li>
              <li className="text-blue-link font-sans pb-5 cursor-pointer">
                2021
              </li>
              <li className="text-blue-link font-sans pb-5 cursor-pointer">
                2020
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-blue-black">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Período
            </h3>
            <div className="flex flex-col space-y-6">
              <label className=" flex items-center justify-between">
                <input
                  type="radio"
                  name="periodo"
                  value="2024"
                  className="mr-2"
                />
                2024
                <span className="ml-auto">R$ 4.438,24</span>
              </label>
              <label className="flex items-center justify-between">
                <input
                  type="radio"
                  name="periodo"
                  value="2023"
                  className="mr-2"
                />
                2023
                <span className="ml-auto">R$ 3.500,00</span>
              </label>
              <label className="flex items-center justify-between">
                <input
                  type="radio"
                  name="periodo"
                  value="2022"
                  className="mr-2"
                />
                2022
                <span className="ml-auto">R$ 4.120,00</span>
              </label>
            </div>
            <div className="flex space-y-2 mt-4">
              <button
                onClick={handleCloseModal}
                className="mt-4 text-blue-link"
              >
                Cancelar
              </button>
              <button
                onClick={handleCloseModal}
                className="ml-auto px-5 bg-verde-unimed text-white rounded-md"
              >
                Filtrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoIR;
