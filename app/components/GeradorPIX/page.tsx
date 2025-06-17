"use client";

import React, { useState } from "react";
import detalhesPagamentos, { PaymentCategory } from "../../utils/const";
import { OkCheck } from "../Icons/OkCheck";
import { Copy } from "../Icons/Copy";
import CountdownTimer from "../EasyTimer";

interface DetalhesPagamentoProps {
  categoria: keyof PaymentCategory;
}

const GeradorPIX: React.FC<DetalhesPagamentoProps> = ({ categoria = "PIX" }) => {
  const [copiado, setCopiado] = useState(false);

  const handleCopyPIX = () => {
    setCopiado(true);
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  const valorTotal = detalhesPagamentos[categoria][0].valorTotal;

  return (
    <div className="w-full max-w-[680px] mx-auto p-6 bg-white dark:bg-verde-dark rounded-lg mb-10">
      <div className="mb-6 border-t pt-4">
        {copiado && (
          <div className="flex items-center mb-4 text-blue-black">
            <OkCheck />
            <p className="ml-2">Seu código PIX foi copiado com sucesso</p>
          </div>
        )}
        <ol className="list-decimal list-inside text-gray-700 mb-4">
          <li>Abra o aplicativo do banco de sua preferência.</li>
          <li className="pt-2">Selecione a opção para realizar um pagamento via PIX.</li>
          <li className="pt-2">
            Cole o código copiado ou escaneie o QR Code abaixo com a câmera do seu celular.
          </li>
        </ol>

        <div className="flex flex-col md:flex-row md:items-center mb-8 gap-6">
          <img
            src="/assets/imgs/qr-code.png"
            alt="QR Code"
            className="w-48 h-60 object-contain"
          />

          <div className="p-5 border border-gray-300 rounded-md bg-gray-card flex-1">
            <h2
              className="pb-5 flex items-center text-blue-link cursor-pointer"
              onClick={handleCopyPIX}
            >
              <Copy />
              <span className="ml-2">Copiar código PIX</span>
            </h2>
            <p className="text-blue-black break-all text-sm">
              00020101021226850014br.gov.bcb.pix2563qrcodepix.bb.com.br/pix/v2/64cd278c-56fb-43c1-95f9-04d6c9c2ba695204000053039865802BR5922GRUPO
              CASAS BAHIA S.A.6009SAO PAULO62070503***630491AC
            </p>
          </div>
        </div>

        <div>
          <p className="text-blue-black mt-4">Esse código expira em</p>
          <div className="text-blue-black my-5">
            <CountdownTimer />
          </div>
          <p className="text-gray-400 text-sm mt-1">
            Pague até 11/03/2024 às 17h03
          </p>
        </div>
      </div>

      <button className="w-full md:w-auto px-4 py-3 bg-green-500 text-white font-bold rounded-lg shadow hover:bg-green-600">
        Confirmar pagamento
      </button>
    </div>
  );
};

export default GeradorPIX;
