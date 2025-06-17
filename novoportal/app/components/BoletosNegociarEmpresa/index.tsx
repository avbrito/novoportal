"use client";

import React, { useState } from "react";
import { bolNegociar } from "../../utils/const";
import Link from "next/link";
import { ArrowLeftBlue } from "../Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";

interface BolNegociar {
  id: number;
  status: string;
  documento: string;
  vencimento: string;
  valor: number;
}

const BoletosNegociarEmpresa = () => {
  const router = useRouter();
  const [selectedBoletos, setSelectedBoletos] = useState<number[]>([]);
  const [metodoPagamento, setMetodoPagamento] = useState<string>(""); 

  const toggleBoletoSelection = (id: number) => {
    if (selectedBoletos.includes(id)) {
      setSelectedBoletos(selectedBoletos.filter((boletoId) => boletoId !== id));
    } else {
      setSelectedBoletos([...selectedBoletos, id]);
    }
  };

  const total = bolNegociar
    .filter((boleto) => selectedBoletos.includes(boleto.id))
    .reduce((sum, boleto) => sum + boleto.valor, 0);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-verde-dark dark:text-white">
      <div className="flex bg-white dark:bg-verde-dark w-full max-w-4xl text-center align-bottom">
        <h2 className="flex items-center text-2xl text-blue-black dark:text-white font-sans my-10">
          <div
            onClick={() => router.push("/Empresa/SegundaViaBoleto")}
            className="cursor-pointer"
          >
            <ArrowLeftBlue />
          </div>
          <span className=" justify-center text-center">
            Quais boletos você gostaria de negociar?
          </span>
        </h2>
      </div>

      {bolNegociar.map((boleto) => (
        <div
          key={boleto.id}
          className={`flex items-center justify-between border rounded-3xl p-4 mb-4 ${
            selectedBoletos.includes(boleto.id) ? "border-green-500" : "#D0D5DD"
          }`}
        >
          <div className="flex items-center space-x-4 rounded-full">
            <input
              type="checkbox"
              checked={selectedBoletos.includes(boleto.id)}
              onChange={() => toggleBoletoSelection(boleto.id)}
              className="form-checkbox h-5 w-5 text-green-500 rounded-lg hover:bg-verde-unimed"
            />
            <div className="space-y-2">
              <p
                className="w-fit px-2 font-sans text-sm flex items-center rounded-full"
                style={{
                  color: boleto.status === "Em aberto" ? "#B54708" : "#B42318",
                  backgroundColor:
                    boleto.status === "Em aberto" ? "#fff0dc" : "#ffecea",
                }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full mr-2"
                  style={{
                    backgroundColor:
                      boleto.status === "Em aberto" ? "#B54708" : "#B42318",
                  }}
                ></span>
                <span
                  style={{
                    backgroundColor:
                      boleto.status === "Em aberto" ? "#fff0dc" : "#ffecea",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  {boleto.status}
                </span>
              </p>

              <p className="text-lg font-sansBold text-blue-black dark:text-white">
                Documento: {boleto.documento}
              </p>
              <p className="text-sm text-blue-regular">
                Vencimento: {boleto.vencimento}
              </p>
            </div>
          </div>
          <p className="text-lg font-semibold text-blue-black dark:text-white">
            R$ {boleto.valor.toFixed(2)}
          </p>
        </div>
      ))}
      <div className="space-x-4 items-center pt-4 pb-4">
        <div className="flex gap-2">
          <p className="text-lg font-bold  text-blue-black dark:text-white">
            Total:
          </p>
          <p className="text-lg font-bold text-green-500">
            R$ {total.toFixed(2)}
          </p>
        </div>
        <div className="block">
          <p className="text-black">Selecione o método de pagamento</p>

          <div className="flex flex-col space-y-2 text-black font-sans">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="metodoPagamento"
                value="cartaoCredito"
                className="form-radio text-blue-500"
                onChange={() => setMetodoPagamento("cartaoCredito")}
              />
              <span>Cartão de Crédito</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="metodoPagamento"
                value="pix"
                className="form-radio text-blue-500"
                onChange={() => setMetodoPagamento("pix")}
              />
              <span>PIX</span>
            </label>
          </div>
        </div>
      </div>
      {selectedBoletos.length === 0 ? (
        <span className="w-2/6 mt-4 px-3 py-2 bg-green-500 text-white font-sans rounded-lg shadow cursor-not-allowed">
          Simular negociação
        </span>
      ) : (
        <Link
          href={`/Empresa/FinanceiroDemonstrativos/Pagamentos/Negociar/Negociar${metodoPagamento === "pix" ? "PIX" : "Credito"}`}
          className="w-2/6 mt-4 px-3 py-2 bg-green-500 text-white font-sans rounded-lg shadow hover:bg-green-600"
        >
          Simular negociação
        </Link>
      )}
    </div>
  );
};

export default BoletosNegociarEmpresa;
