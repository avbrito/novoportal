'use client';

import React, { useEffect, useState } from "react";
import { Calendario } from "../Icons/Calendario";
import { ArrowDown } from "../Icons/ArrowDown";
import { dataFaturamento } from "../../utils/const";

interface Campanha {
  idCampanha: string;
  nomeCampanha: string;
  mes: string;
  ano: string;
  valorDoacao: string;
  dataAceite: string;
}

const InfoCampanhas: React.FC = () => {
  const [campanhas, setCampanhas] = useState<Campanha[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] =
    useState<keyof typeof dataFaturamento>("Maio");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const campanhasDoacoes = campanhas;

  useEffect(() => {
    const fetchCampanhas = async () => {
      try {
        const mockCampanhas: Campanha[] = [
          {
            idCampanha: "1",
            nomeCampanha: "Cantata de Natal",
            mes: "Abril",
            ano: "2025",
            valorDoacao: "15,00",
            dataAceite: "20/12/2024",
          },
          {
            idCampanha: "2",
            nomeCampanha: "Fome Zero",
            mes: "Abril",
            ano: "2025",
            valorDoacao: "75,00",
            dataAceite: "15/04/2025",
          },
          {
            idCampanha: "3",
            nomeCampanha: "Campanha de pascoa",
            mes: "Abril",
            ano: "2025",
            valorDoacao: "100,00",
            dataAceite: "20/04/2025",
          },
        ];

        setCampanhas(mockCampanhas);
      } catch (error) {
        console.error("Erro ao buscar campanhas:", error);
      }
    };

    fetchCampanhas();
  }, []);

  return (
  <div className="max-w-[808px] w-full mx-auto px-4">
    <div className="p-4 md:p-6 bg-white rounded-xl text-blue-black">
        <h2 className="text-lg font-semibold mb-4">Campanhas</h2>

        <div className="flex items-center flex-wrap gap-2 mb-6">
          <button
            onClick={handleOpenModal}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F2F4F7] text-sm font-medium"
          >
            <Calendario />
            Período
            <ArrowDown />
          </button>

          {Object.keys(dataFaturamento).map((period, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedPeriod(period as keyof typeof dataFaturamento)
              }
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                period === selectedPeriod
                  ? "bg-[#12B76A] text-white"
                  : "bg-[#F2F4F7] text-[#667085]"
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        <div className="list-group">
          {campanhasDoacoes.map((campanha, index) => (
            <div
              key={index}
              className="list-group-item mt-2 border-[#F7F7F7] border-1 bg-gray-fundo-claro d-flex justify-content-between p-3 rounded-lg gap-5"
            >
              <div className="align-baseline">
                <small className="text-muted">{campanha.dataAceite}</small>
                <div className="fw-bold flex flex-row-reverse text-success">
                  R$ {campanha.valorDoacao}
                </div>
                <div className="fw-semibold">{campanha.nomeCampanha}</div>
              </div>
            </div>
          ))}
          {campanhas.length === 0 && (
            <div className="list-group-item">Nenhuma campanha encontrada.</div>
          )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-blue-black">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
              <h3 className="text-lg font-sans mb-4">Período</h3>
              <div className="flex flex-col space-y-6">
                <label className="flex items-center">
                  <input type="radio" name="periodo" value="2024" className="mr-2" />
                  Fevereiro
                </label>
                <label className="flex items-center">
                  <input type="radio" name="periodo" value="2023" className="mr-2" />
                  Janeiro
                </label>
                <label className="flex items-center">
                  <input type="radio" name="periodo" value="2022" className="mr-2" />
                  Dezembro, 2024
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
                  className="ml-auto px-10 py-2 bg-verde-unimed text-white rounded-lg"
                >
                  Filtrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCampanhas;
