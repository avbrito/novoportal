import React, { useState } from "react";
import { useUserContext } from "../../UserContext";
import {
  levels,
  userPoints,
  dataFaturamento,
  chartData,
} from "../../utils/const";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";
import BarChart from "../BarChart/BarChart";
import { Calendario } from "../Icons/Calendario";
import { ArrowDown } from "../Icons/ArrowDown";
import { ArrowRightBlue } from "../Icons/ArrowRightBlue";

const InfoProducao = () => {
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
        <div className="w-full max-w-[808px] mx-auto px-4 md:px-8 bg-white rounded-lg">
          <div className="flex items-center mb-6">
            <span className="mt-1 cursor-pointer" onClick={handleRedirect}>
              <ArrowLeftBlue />
            </span>
            <h1 className="text-2xl font-sans text-blue-black pl-2">
              Benefícios
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2 mb-6">
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

          <div className="bg-gray-card border-blue-lightest border border-solid p-8 rounded-lg left-0 w-96">
            <h2 className="text-blue-dark font-sans text-lg text-center">
              Faturamento líquido
            </h2>
            <p className="text-blue-black font-sansBold text-3xl font-bold text-center mt-2">
              {dataFaturamento[selectedPeriod].faturamentoLiquido}
            </p>

            <div className="mx-auto grid gap-6 mt-6">
              <div>
                <h3 className="text-verde-sucesso text-sm font-semibold">
                  Créditos
                </h3>
                <hr className="my-2 border-blue-lightest" />
                {dataFaturamento[selectedPeriod].creditos.map(
                  (item: { label: string; value: string }, index: number) => (
                    <div key={index} className="flex flex-col">
                      <div className="flex justify-between text-gray-700 mt-2">
                        <span className="text-blue-dark font-sans text-sm">
                          {item.label}
                        </span>
                        <span className="text-blue-black text-sm font-sansBold">
                          {item.value}
                        </span>
                      </div>
                      {index <
                        dataFaturamento[selectedPeriod].creditos.length - 1 && (
                        <hr className="my-2 border-blue-lightest" />
                      )}
                    </div>
                  )
                )}
              </div>
              <hr className="my-2 border-blue-lightest" />
              <div>
                <h3 className="text-red-erro text-sm font-semibold">Débitos</h3>
                <hr className="my-2 border-blue-lightest" />
                {dataFaturamento[selectedPeriod].debitos.map(
                  (item: { label: string; value: string }, index: number) => (
                    <div key={index} className="flex flex-col">
                      <div className="flex justify-between text-gray-700 mt-2">
                        <span className="text-blue-dark font-sans font-normal text-sm">
                          {item.label}
                        </span>
                        <span className="text-blue-black text-sm font-sansBold">
                          {item.value}
                        </span>
                      </div>
                      {index <
                        dataFaturamento[selectedPeriod].debitos.length - 1 && (
                        <hr className="my-2 border-blue-lightest" />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 bg-white p-6 rounded-lg">
            <h2 className="text-blue-dark font-sans text-2xl font-normal mb-3">
              Histórico de faturamento
            </h2>
            <p className="text-blue-dark font-sans text-sm mt-3">
              Valores líquidos referentes aos últimos meses
            </p>
            <a
              href="#"
              className="flex items-center text-blue-link font-sans text-sm font-normal my-6 gap-3"
            >
              Ver detalhes
              <ArrowRightBlue />
            </a>
            <BarChart data={chartData} />
          </div>

          <div className="ml-5 mt-6 text-gray-500 text-sm flex">
            <p className="grid">
              Seu pagamento será feito na conta do banco
              <strong>
                {" "}
                CONFEDERAÇÃO NACIONAL DAS COOPERATIVAS CENTRAIS UNICRED
              </strong>
              agência Unicred Minas e conta 00005697-2. <br />
              Em caso de dúvida,
              <a href="#" className="text-blue-link font-sans text-sm">
                clique aqui.
              </a>
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-blue-black">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Período
            </h3>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center justify-between">
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

export default InfoProducao;
