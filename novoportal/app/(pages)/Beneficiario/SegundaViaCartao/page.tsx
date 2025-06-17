"use client";

import Layout from "../../../components/Layout";
import React, { useState, useEffect } from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import SegViaCartao from "@/app/components/SegViaCartao/index";
import { SucessoCheck } from "@/app/components/Icons/SucessoCheck";
import { useRouter } from "next/navigation";
import segundaViaCartao from "../../../../public/segundaViaCartao.png";

const SegundaViaCartao = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatText = (text: string) => {
    return text.replace(
      /R\$\s?(\d{1,3}(?:\.\d{3})*(?:,\d{2})?)/g,
      `<span class="font-bold text-[#0BA5EC]">$&</span>`
    );
  };

  const subtitleText =
    "Existe uma taxa de R$ 15,00 para emissão de uma nova carteirinha, que poderá ser isenta em caso de roubo com a apresentação de um boletim de ocorrência";

  return (
    <MenuProvider>
      <Layout>
        <div className="w-full max-w-[808px] mx-auto">
          <div className="flex flex-col items-left p-10 text-blue-black font-sans text-2xl">
            2ª via de cartão
          </div>
          {isClient && (
            <SegViaCartao
              image={segundaViaCartao}
              title="Precisa de outra carteirinha?"
              subtitle="Não se preocupe, a gente te ajuda! Só precisamos confirmar alguns dados."
              subtitleTwo={formatText(subtitleText)}
              buttonText="Solicitar 2ª via de cartão"
              onButtonClick={() =>
                router.push("/Beneficiario/SegundaViaCartao/NovoCartaoBenef")
              }
            />
          )}
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default SegundaViaCartao;
