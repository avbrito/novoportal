"use client";


import Layout from "../../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoBeneficios from "@/app/components/InfoBeneficios";


const Beneficios = () => {
  return (
    <MenuProvider>
      <Layout>
        <InfoBeneficios />
      </Layout>
    </MenuProvider>
  );
};

export default Beneficios;
