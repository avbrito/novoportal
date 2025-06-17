"use client";

import Layout from "../../../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import Sobras from "@/app/components/Sobras";



const DistribuicaoSobras = () => {
  return (
    <MenuProvider>
    <Layout>
      <Sobras />
    </Layout>
  </MenuProvider>
  );
};

export default DistribuicaoSobras;
