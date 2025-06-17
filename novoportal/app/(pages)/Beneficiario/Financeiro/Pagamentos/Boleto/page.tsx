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
        <div className="w-full max-w-[680px] mx-auto mt-10 px-4">
          <h2 className="flex items-center text-2xl text-blue-black dark:text-white font-sans">
            <div
              onClick={() => router.push("/Beneficiario/Financeiro/Pagamentos")}
              className="cursor-pointer"
            >
              <ArrowLeftBlue />
            </div>
            <span className="ml-2">Detalhes do pagamento</span>
          </h2>
        </div>

        <div className="w-full max-w-[680px] mx-auto px-4">
          <DetalhesPagamento categoria="Boleto" />
          <GeradorBoleto categoria="Boleto" />
        </div>
      </Layout>
    </MenuProvider>
  );
}
