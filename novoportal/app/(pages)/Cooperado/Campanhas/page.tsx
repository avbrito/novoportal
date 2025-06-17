"use client";

import Layout from "../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoCampanhas from "@/app/components/InfoCampanhas/page";



const IR = () => {
  return (
    <MenuProvider>
    <Layout>
      <InfoCampanhas />
    </Layout>
  </MenuProvider>
  );
};

export default IR;
