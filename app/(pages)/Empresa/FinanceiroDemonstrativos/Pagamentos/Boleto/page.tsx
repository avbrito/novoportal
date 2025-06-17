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
        <div className="flex bg-white dark:bg-verde-dark w-full max-w-4xl justify-center text-center align-bottom">
          <h2 className="flex items-center text-2xl text-blue-black dark:text-white font-sans my-10">
            <div
              onClick={() => router.push("/Empresa/SegundaViaBoleto")}
              className="cursor-pointer"
            >
              <ArrowLeftBlue />
            </div>
            <span className="ml-2">Detalhes do pagamento</span>
          </h2>
        </div>
        <DetalhesPagamento categoria="Boleto" />
        <GeradorBoleto categoria="Boleto" />
      </Layout>
    </MenuProvider>
  );
}
