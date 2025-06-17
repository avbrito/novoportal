"use client";

import {
  manuaisPdfCooperado,
  manuaisZip,
  videosIrys,
  dataFaturamento,
} from "../../../utils/const";
import Layout from "../../../components/Layout";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import { Calendario } from "@/app/components/Icons/Calendario";
import { ArrowDown } from "@/app/components/Icons/ArrowDown";

const Documentos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] =
    useState<keyof typeof dataFaturamento>("Maio");
  const [selectedTag, setSelectedTag] = useState("Todos");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const tags = [
    "Todos",
    "AGO",
    "AGE",
    "Estatuto Social",
    "Regimento",
    "Regulamentos",
    "Recurso de Glosa",
    "Anexos",
    "Formulários",
    "Manuais",
    "Beneficios",
    "Tabelas",
    "Termo de confidencialidade",
    "Fundos",
  ];

  return (
    <MenuProvider>
      <Layout>
        <div className="p-6 bg-white min-h-screen text-blue-black">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <h2 className="text-2xl font-semibold text-[#101828] mb-6">
                Documentos
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={handleOpenModal}
                  className="flex items-center text-[#101828] gap-1 px-3 py-1.5 rounded-full bg-[#F2F4F7] text-sm font-medium"
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
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                      tag === selectedTag
                        ? "bg-[#12B76A] text-white"
                        : "bg-[#F2F4F7] text-[#667085]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="mb-10">
                <h3 className="text-base font-semibold text-[#344054] mb-3">
                  Anexos
                </h3>
                <div className="space-y-4">
                  {manuaisPdfCooperado
                    .filter((item) => {
                      if (selectedTag === "Todos") return true;
                      return item.name
                        .toLowerCase()
                        .includes(selectedTag.toLowerCase());
                    })
                    .map((item, index) => (
                      <a
                        key={index}
                        href={item.redirect.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 border border-[#D0D5DD] bg-white rounded-lg p-4 hover:bg-gray-50 transition"
                      >
                        <img
                          src={item.photoUrl}
                          alt={item.name}
                          className="w-6 h-6"
                        />
                        <span className="text-sm text-[#101828] font-medium">
                          {item.name}
                        </span>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded-xl border border-gray-unimed w-[320px] text-[#101828]">
                <h3 className="text-lg font-semibold mb-4">Período</h3>
                <div className="flex flex-col space-y-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="periodo"
                      value="2024"
                      className="mr-2"
                    />
                    Fevereiro
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="periodo"
                      value="2023"
                      className="mr-2"
                    />
                    Janeiro
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="periodo"
                      value="2022"
                      className="mr-2"
                    />
                    Dezembro, 2024
                  </label>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={handleCloseModal}
                    className="text-blue-600 font-medium"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleCloseModal}
                    className="px-6 py-2 bg-[#12B76A] text-white rounded-lg font-medium"
                  >
                    Filtrar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default Documentos;
