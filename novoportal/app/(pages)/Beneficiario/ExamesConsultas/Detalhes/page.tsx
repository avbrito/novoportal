"use client";

import Layout from "../../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoStatus from "@/app/components/InfoStatus/page";



const Detalhes = () => {
  return (
    <MenuProvider>
    <Layout>
      <InfoStatus />
    </Layout>
  </MenuProvider>
  );
};

export default Detalhes;
