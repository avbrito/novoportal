"use client";

import React, { useState, useEffect } from "react";
import { useUserContext } from "../../UserContext";
import { useRouter } from "next/navigation";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { Laudo } from "../../components/Laudo";

type Consulta = {
  id: number;
  data: string;
  tipo: string;
  unidade: string;
  profissional: string;
  validade: string;
  status: string;
  linkText: string;
  numSolic: number;
};

const statusStyles: Record<
  string,
  { textColor: string; bgColor: string; borderColor: string }
> = {
  Autorizado: {
    textColor: "text-[#12B76A]",
    bgColor: "bg-[#F0FDF4]",
    borderColor: "border-[#12B76A]",
  },
  Negado: {
    textColor: "text-[#F04438]",
    bgColor: "bg-[#FEF3F2]",
    borderColor: "border-[#F04438]",
  },
  "Em Análise": {
    textColor: "text-[#B54708]",
    bgColor: "bg-[#FFFAEB]",
    borderColor: "border-[#B54708]",
  },
  "Parcialmente autorizado": {
    textColor: "text-[#B54708]",
    bgColor: "bg-[#FFFAEB]",
    borderColor: "border-[#B54708]",
  },
};

const InfoStatus = () => {
  const { userType } = useUserContext();
  const [consultaSelecionada, setConsultaSelecionada] =
    useState<Consulta | null>(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("consultaSelecionada");
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setConsultaSelecionada(parsed);
      } catch (error) {
        console.error("Erro ao parsear consulta:", error);
      }
    }
  }, []);

  const handleRedirect = () => {
    router.back();
  };

  if (!consultaSelecionada) {
    return (
      <div className="p-6 text-center text-gray-500">
        Nenhuma consulta selecionada.
      </div>
    );
  }

  const styles = statusStyles[consultaSelecionada.status] || {
    textColor: "text-gray-400",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-unimed",
  };

  return (
    <div className="p-2 bg-white min-h-screen overflow-y-auto">
      <div className="p-6 max-w-xl mx-auto bg-white">
        <div className="flex items-center mb-6">
          <span className="cursor-pointer mt-[2px]" onClick={handleRedirect}>
            <ArrowLeftBlue />
          </span>
          <h1 className="text-[20px] font-normal text-[#101828] pl-2">
            Solicitação {consultaSelecionada.numSolic}
          </h1>
        </div>

        <div className="space-y-4">
          <div className="text-sm text-[#344054]">
            Número de autorização
            <p className="text-[#12B76A] font-semibold text-base">
              {consultaSelecionada.numSolic}
            </p>
          </div>

          <div className="space-y-1 text-sm">
            <p className="text-[#344054]">{consultaSelecionada.profissional}</p>
            <p className="text-[#101828] font-semibold text-base">
              {consultaSelecionada.unidade}
            </p>
            <p className="text-[#344054]">{consultaSelecionada.data}</p>
            <p className="text-[#344054] text-sm">
              Válido até {consultaSelecionada.validade}
            </p>

            <div className="mt-2">
              <span
                className={`text-xs font-medium ${styles.textColor} ${styles.bgColor} px-3 py-[3px] rounded-full`}
              >
                ● {consultaSelecionada.status}
              </span>
            </div>

            {consultaSelecionada.status !== "Autorizado" && (
              <div className="text-sm text-[#667085] mt-2 space-y-1">
                <p>1. Plano do beneficiário não se encontra ativo.</p>
                <p>
                  2. Deseja remarcar com um <b>Centro de Atendimento</b>,
                  através do número no verso do seu cartão.
                </p>
                <p>3. Beneficiário com carta de exclusão.</p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 bg-[#EBF0FA] rounded-md p-2 w-fit">
            <div className="border-l-2 border-[#175CD3] pl-2">
              <Laudo />
            </div>
            <div>
              <p className="text-sm text-[#175CD3] font-medium">
                Visualizar laudo
              </p>
              <p className="text-[#667085] text-[9px] font-sans">
                02 de Junho 2024
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex flex-row border rounded-lg p-4 items-center justify-between">
              <div>
                <p className="text-sm text-[#344054]">Visita Hospitalar</p>
                <p className="text-sm text-[#98A2B3]">Paciente internado</p>
              </div>
              <span
                  className={`text-xs font-medium ${styles.textColor} ${styles.bgColor} px-3 py-[3px] rounded-full`}
                >
                  ● {consultaSelecionada.status}
                </span>
            </div>

            <div className="border rounded-lg p-4 flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-sm text-[#344054]">Exame de urina</p>
              </div>
              <span className="text-xs text-[#344054] px-2 py-[2px] rounded-md">
                <p className="text-sm text-[#344054]">Prazo análise:</p>
                  1 minuto
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoStatus;
