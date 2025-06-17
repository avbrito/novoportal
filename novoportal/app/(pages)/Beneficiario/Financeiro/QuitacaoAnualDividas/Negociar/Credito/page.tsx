"use client";


import { MenuProvider } from "@/app/components/Context/MenuContext";
import CreditCardFormBeneficiario from "@/app/components/CreditCardFormBeneficiario/index";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import Layout from "@/app/components/Layout";
import { useRouter } from "next/navigation";

export default function Credito() {
    const router = useRouter();
    

  return (
    <MenuProvider>
      <Layout>
        <CreditCardFormBeneficiario />
      </Layout>
    </MenuProvider>
  );
}
