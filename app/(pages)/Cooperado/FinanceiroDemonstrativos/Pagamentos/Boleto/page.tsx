"use client";

import { useRouter } from "next/navigation";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import Layout from "@/app/components/Layout";
import DetalhesPagamento from "@/app/components/PIX/page";
import GeradorBoleto from "@/app/components/GeradorBoleto/page";

export default function Boleto() {
  const router = useRouter();

  return (
    <MenuProvider>
      <Layout>
        <div className="bg-white dark:bg-verde-dark p-4">
          <div className="w-full max-w-[680px] mx-auto pt-2">
            <h2 className="flex items-center text-2xl text-blue-black dark:text-white font-sans mb-10">
              <div
                onClick={() =>
                  router.push("/Cooperado/FinanceiroDemonstrativos/Pagamentos")
                }
                className="cursor-pointer"
              >
                <ArrowLeftBlue />
              </div>
              <span className="ml-2">Detalhes do pagamento</span>
            </h2>
          </div>

          <DetalhesPagamento categoria="Boleto" />
          <GeradorBoleto categoria="Boleto" />
        </div>
      </Layout>
    </MenuProvider>
  );
}
