"use client";

import Layout from "../../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoLaudos from "@/app/components/InfoLaudos/page";



const SolicitacaoExames = () => {
  return (
    <MenuProvider>
    <Layout>
      <InfoLaudos />
    </Layout>
  </MenuProvider>
  );
};

export default SolicitacaoExames;
