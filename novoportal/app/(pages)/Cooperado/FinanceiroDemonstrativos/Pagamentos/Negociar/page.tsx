"use client";

import { useRouter } from "next/navigation";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import Layout from "@/app/components/Layout";
import BoletosNegociarCooperado from "@/app/components/BoletosNegociarCooperado";

export default function Negociar() {
  const router = useRouter();

  return (
    <MenuProvider>
      <Layout>
        <BoletosNegociarCooperado />
      </Layout>
    </MenuProvider>
  );
}
