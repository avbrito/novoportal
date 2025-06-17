"use client";

import React, { useState } from "react";
import detalhesPagamentos, { PaymentCategory } from "../../utils/const";
import { OkCheck } from "../Icons/OkCheck";
import { Copy } from "../Icons/Copy";

interface DetalhesPagamentoProps {
  categoria: keyof PaymentCategory;
}

const GeradorBoleto: React.FC<DetalhesPagamentoProps> = ({ categoria = "Boleto" }) => {
  const [copiado, setCopiado] = useState(false);

  const handleCopyPIX = () => {
    setCopiado(true);
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  const valorTotal = detalhesPagamentos[categoria]?.[0]?.valorTotal;

  return (
    <div className="w-full max-w-[680px] mx-auto px-4 bg-white dark:bg-verde-dark p-6 rounded-lg mb-10">
      <div className="mb-6 border-t pt-4">
        {copiado && (
          <div className="flex items-center mb-4 text-blue-black">
            <OkCheck />
            <p className="ml-2">Seu código do boleto foi copiado com sucesso</p>
          </div>
        )}

        <div className="flex flex-col mb-8">
          <div className="p-5 mt-2 border border-gray-300 rounded-md bg-gray-card">
            <h2
              className="pb-5 flex text-blue-link cursor-pointer"
              onClick={handleCopyPIX}
            >
              <Copy />
              <span className="ml-2">Copiar código do boleto</span>
            </h2>
            <p className="w-full pb-5 text-blue-black break-words">
              00020126980014br.gov.bcb.pix0136dce71622-c425-4f3c-989d-34853baf9a720236Conta
              Ref DEZ/24 Vencimento 11/01/25...
            </p>
          </div>
        </div>

        <div>
          <p className="font-sansBold text-blue-black mt-4">
            Esse código expira em 15/03/2024
          </p>
          <p className="font-sans text-blue-black mt-4">
            Os pagamentos por boleto podem demorar até 3 dias úteis para serem processados
          </p>
        </div>
      </div>

      <button className="w-full mt-6 px-4 py-3 bg-green-500 text-white font-bold rounded-lg shadow hover:bg-green-600">
        Confirmar pagamento
      </button>
    </div>
  );
};

export default GeradorBoleto;
