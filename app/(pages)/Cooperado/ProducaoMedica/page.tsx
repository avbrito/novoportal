"use client";

import Layout from "../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoProducao from "@/app/components/InfoProducao";


const ProducaoMedica = () => {
  return (
    <MenuProvider>
    <Layout>
      <InfoProducao />
    </Layout>
  </MenuProvider>
  );
};

export default ProducaoMedica;
