"use client";

import Layout from "../../../components/Layout";
import React, { useState, useEffect } from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoCalendarioFechamento from "@/app/components/InfoCalendarioFechamento";

const CalendarioFechamento = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <MenuProvider>
      <Layout>
        <InfoCalendarioFechamento />
      </Layout>
    </MenuProvider>
  );
};

export default CalendarioFechamento;
