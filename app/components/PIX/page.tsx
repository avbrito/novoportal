"use client";

import React, { useState } from "react";
import detalhesPagamentos, { PaymentCategory } from "../../utils/const";

interface DetalhesPagamentoProps {
  categoria: keyof PaymentCategory;
}

const DetalhesPagamento: React.FC<DetalhesPagamentoProps> = ({ categoria = "PIX" }) => {
  const [copiado, setCopiado] = useState(false);

  const valorTotal = detalhesPagamentos[categoria]?.[0]?.valorTotal;

  if (!detalhesPagamentos[categoria] || detalhesPagamentos[categoria].length === 0) {
    return (
      <div className="w-full max-w-[680px] mx-auto px-4 text-gray-500">
        Informações de pagamento não disponíveis.
      </div>
    );
  }

  return (
    <div className="w-full max-w-[680px] mx-auto bg-white dark:bg-verde-dark p-6 rounded-lg mb-10 px-4">
      <div className="mb-6">
        <p className="text-gray-500">Você está pagando</p>
        <h2 className="text-3xl font-sansBold text-gray-800 dark:text-gray-200">{valorTotal}</h2>
      </div>

      <div className="mb-6 space-y-2">
        {detalhesPagamentos[categoria].map((payment, index) => (
          <div key={index}>
            <div className="flex justify-between text-gray-700 dark:text-gray-300 my-2">
              <span>Vencimento</span>
              <span>{payment.vencimento}</span>
            </div>
            <hr />
            <div className="flex justify-between text-gray-700 dark:text-gray-300 my-2">
              <span>Valor do pagamento</span>
              <span>{payment.valor}</span>
            </div>
            <hr />
            <div className="flex justify-between text-gray-700 dark:text-gray-300 my-2">
              <span>Multa por dia de atraso</span>
              <span>{payment.multa}</span>
            </div>
            <hr />
            <div className="flex justify-between text-gray-700 dark:text-gray-300 my-2">
              <span>Dias de atraso</span>
              <span>{payment.diasAtraso}</span>
            </div>
            <hr />
            <div className="flex justify-between text-gray-700 dark:text-gray-300 my-2">
              <span>Valor da multa</span>
              <span>{payment.valorMulta}</span>
            </div>
            <hr className="mb-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetalhesPagamento;
