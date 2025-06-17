"use client";


import { MenuProvider } from "@/app/components/Context/MenuContext";
import CreditCardForm from "../../../../../components/CreditCardFormEmpresa";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import Layout from "@/app/components/Layout";
import { useRouter } from "next/navigation";

export default function Credito() {
    const router = useRouter();
    

  return (
    <MenuProvider>
      <Layout>
        <CreditCardForm />
      </Layout>
    </MenuProvider>
  );
}
