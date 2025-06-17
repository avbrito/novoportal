"use client";

import React, { useState } from "react";
import { useUserContext } from "../../UserContext";
import { useRouter } from "next/navigation";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { QuestionEmpty } from "../Icons/QuestionEmpty";

const filtros = ["Todos", "Eletivas", "Urgências", "Internações"];

const historicoConsultas = [
  {
    id: 1,
    data: "20 Março 2024",
    tipo: "Eletiva",
    unidade: "Unimed Uberlândia",
    profissional: "Tatiane Caroline",
    validade: "20/03/2024",
    status: "Autorizado",
    linkText: "Visualizar laudo",
    numSolic: 42425648787,
  },
  {
    id: 2,
    data: "20 Março 2024",
    tipo: "Eletiva",
    unidade: "Unimed Uberlândia",
    profissional: "Tatiane Caroline",
    validade: "20/03/2024",
    status: "Negado",
    linkText: "Ver detalhes",
    numSolic: 42425648787,
  },
  {
    id: 3,
    data: "20 Março 2024",
    tipo: "Eletiva",
    unidade: "Unimed Uberlândia",
    profissional: "Tatiane Caroline",
    validade: "20/03/2024",
    status: "Em Análise",
    linkText: "Ver detalhes",
    numSolic: 42425648787,
  },
  {
    id: 4,
    data: "20 Março 2024",
    tipo: "Eletiva",
    unidade: "Unimed Uberlândia",
    profissional: "Tatiane Caroline",
    validade: "20/03/2024",
    status: "Parcialmente autorizado",
    linkText: "Ver detalhes",
    numSolic: 42425648787,
  },
];

const statusStyles: Record<
  string,
  { textColor: string; bgColor: string; borderColor: string }
> = {
  Autorizado: {
    textColor: "text-[#027A48]",
    bgColor: "bg-[#ECFDF3]",
    borderColor: "none",
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

const InfoExames = () => {
  const { userType } = useUserContext();
  const [filtroSelecionado, setFiltroSelecionado] = useState("Todos");
  const router = useRouter();

  const handleDetalhesClick = (consulta: (typeof historicoConsultas)[0]) => {
    localStorage.setItem("consultaSelecionada", JSON.stringify(consulta));
    router.push(`/Beneficiario/ExamesConsultas/Detalhes`);
  };

  const consultasFiltradas =
    filtroSelecionado === "Todos"
      ? historicoConsultas
      : historicoConsultas.filter(
          (consulta) => consulta.tipo === filtroSelecionado
        );

  const handleRedirect = () => {
    router.back();
  };

  return (
    <div className="p-4 bg-white dark:bg-verde-dark min-h-screen">
      <div className="p-6 w-[808px] mx-auto bg-white">
        <div className="flex items-center mb-6">
          <span className="cursor-pointer mt-[2px]" onClick={handleRedirect}>
            <ArrowLeftBlue />
          </span>
          <h1 className="text-[20px] font-normal text-[#101828] pl-2">
            Exames e consultas
          </h1>
        </div>

        <div className="flex gap-2 mb-6 overflow-auto">
          {filtros.map((filtro, idx) => (
            <button
              key={idx}
              onClick={() => setFiltroSelecionado(filtro)}
              className={`h-7 px-4  rounded-full text-sm font-medium border transition-all duration-150 ${
                filtroSelecionado === filtro
                  ? "bg-[#16A34A] text-white border-[#16A34A]"
                  : "bg-[#FCFCFD] text-blue-regular border-[#D0D5DD]"
              }`}
            >
              {filtro}
            </button>
          ))}
        </div>

        <h2 className="text-lg text-blue-black mb-4">Histórico de consultas</h2>
        <div className="space-y-4">
          {consultasFiltradas.length > 0 ? (
            consultasFiltradas.map((item) => {
              const styles = statusStyles[item.status] || {
                textColor: "text-gray-400",
                bgColor: "bg-gray-100",
                borderColor: "border-gray-unimed",
              };

              return (
                <div key={item.id} className="border rounded-xl w-96">
                  <div className="flex justify-between items-start p-4">
                    <p className="text-sm text-blue-medium">{item.data}</p>
                    <span
                      className={`text-xs font-medium ${styles.textColor} ${styles.bgColor} px-2 py-1 rounded-full border-current`}
                    >
                      ● {item.status}
                    </span>
                  </div>
                  <hr />
                  <div className="p-4">
                    <p className="text-sm font-sans text-verde-unimed py-2">
                      {item.tipo}
                    </p>
                    <p className="pt-1 pb-1 text-base font-semibold text-[#101828]">
                      {item.unidade}
                    </p>
                    <p className="pb-1 text-sm font-sans text-blue-black">
                      {item.profissional}
                    </p>
                    <p className="text-xs font-sans text-blue-medium mt-1">
                      Válido até {item.validade}
                    </p>
                    <button
                      onClick={() => handleDetalhesClick(item)}
                      className="text-sm text-[#175CD3] font-medium mt-2 inline-block"
                    >
                      Ver detalhes
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center justify-items-center text-[#667085] text-sm mt-4 gap-4">
              <QuestionEmpty />
              Parece que essa área está vazia por enquanto.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoExames;
