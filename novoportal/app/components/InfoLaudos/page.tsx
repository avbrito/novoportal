"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { HiOutlineDocumentText } from "react-icons/hi";

const InfoLaudos = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 text-[#101828]">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <button onClick={handleRedirect} className="mr-2">
            <ArrowLeftBlue />
          </button>
          <h1 className="text-lg font-medium">Solicitação 42425648787</h1>
        </div>

        <div className="space-y-2 mb-6">
          <p className="text-sm text-[#667085]">Número de autorização</p>
          <p className="text-[#12B76A] font-semibold text-base">42425648787</p>

          <p className="text-sm">Dra. Tatiane Caroline</p>
          <p className="font-semibold">Unimed Uberlândia</p>

          <p className="text-sm">20 Março 2024</p>
          <p className="text-sm">Válido até 20/03/2024</p>

          <span className="inline-block px-2 py-0.5 text-xs text-[#027A48] bg-[#ECFDF3] rounded-full font-medium">
            ● Autorizado
          </span>

          <button className="grid items-center justify-between w-56 text-sm text-[#175CD3] bg-[#EBF0FA] border border-[#EAECF0] px-4 py-2 rounded-lg mt-2">
            <div className="flex items-center gap-2">
              <HiOutlineDocumentText size={18} />
              Visualizar laudo
            </div>
            <span className="text-[#667085] text-xs">02 de junho 2024</span>
          </button>
        </div>

        <div className="gap-4 sm:grid-cols-2 w-64">
        
          <div className="border rounded-lg p-4 bg-white">
            <div className="flex justify-between items-start mb-1">
              <div>
                <p className="text-sm text-[#667085]">Visita Hospitalar</p>
                <p className="text-sm text-[#667085]">Paciente internado</p>
              </div>
              <span className="px-2 py-0.5 text-xs text-[#027A48] bg-[#ECFDF3] rounded-full font-medium whitespace-nowrap">
                ● Autorizado
              </span>
            </div>
          </div>
          <div className="border rounded-lg p-4 bg-white mt-4">
            <div className="flex  justify-between items-start mb-1">
              <div>
                <p className="text-sm text-[#667085]">Exame de urina</p>
                <p className="text-sm text-[#667085]">Exame</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#667085]">Prazo análise:</p>
                <p className="text-sm font-medium">1 minuto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoLaudos;
