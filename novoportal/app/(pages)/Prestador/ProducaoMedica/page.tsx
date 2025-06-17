"use client";

import Layout from "../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoProducaoPrestador from "@/app/components/InfoProducaoPrestador";


const ProducaoMedica = () => {
  return (
    <MenuProvider>
    <Layout>
      <InfoProducaoPrestador />
    </Layout>
  </MenuProvider>
  );
};

export default ProducaoMedica;
