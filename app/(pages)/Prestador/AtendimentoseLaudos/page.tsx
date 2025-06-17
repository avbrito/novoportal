"use client";

import Layout from "../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import TabelaLaudos from "@/app/components/TabelaLaudos";


const AtendimentoseLaudos = () => {
  return (
    <MenuProvider>
    <Layout>
      <TabelaLaudos />
    </Layout>
  </MenuProvider>
  );
};

export default AtendimentoseLaudos;
