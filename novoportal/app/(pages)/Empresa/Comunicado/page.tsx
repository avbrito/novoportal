"use client";

import Layout from "../../../components/Layout";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoComunicado from "@/app/components/InfoComunicado";

export default function Comunicado() {

  return (
    <MenuProvider>
      <Layout>
        <InfoComunicado />
      </Layout>
    </MenuProvider>
  );
}
