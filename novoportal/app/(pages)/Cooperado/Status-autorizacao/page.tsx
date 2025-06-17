"use client";

import Layout from "../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoCalendarioFechamento from "@/app/components/InfoCalendarioFechamento";
import InfoAutorizacao from "@/app/components/InfoAutorizacao";


const StatusAutorizacao = () => {
  return (
    <MenuProvider>
    <Layout>
      <InfoAutorizacao />
    </Layout>
  </MenuProvider>
  );
};

export default StatusAutorizacao;
