"use client";

import Layout from "../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoExames from "@/app/components/InfoExames/page";



const ExamesConsultas = () => {
  return (
    <MenuProvider>
    <Layout>
      <InfoExames />
    </Layout>
  </MenuProvider>
  );
};

export default ExamesConsultas;
