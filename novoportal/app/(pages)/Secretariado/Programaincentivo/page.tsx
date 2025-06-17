"use client";

import Layout from "../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoIncentivo from "@/app/components/InfoIncentivo";


const Programaincentivo = () => {
  return (
    <MenuProvider>
      <Layout>
        <InfoIncentivo />
      </Layout>
    </MenuProvider>
  );
};

export default Programaincentivo;
