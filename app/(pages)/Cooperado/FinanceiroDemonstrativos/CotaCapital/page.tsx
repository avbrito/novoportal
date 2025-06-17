"use client";

import Layout from "../../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import Cota from "@/app/components/Cota";



const CotaCapital = () => {
  return (
    <MenuProvider>
    <Layout>
      <Cota />
    </Layout>
  </MenuProvider>
  );
};

export default CotaCapital;
