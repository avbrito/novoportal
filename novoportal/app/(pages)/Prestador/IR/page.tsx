"use client";

import Layout from "../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoIR from "@/app/components/InfoIR/page";



const IR = () => {
  return (
    <MenuProvider>
    <Layout>
      <InfoIR />
    </Layout>
  </MenuProvider>
  );
};

export default IR;
