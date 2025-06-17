"use client";

import { useEffect, useState } from "react";
import ConsultaStatusExecucao from "@/app/components/ConsultaStatusExecucao";
import Layout from "../../../components/Layout";
import { MenuProvider } from "@/app/components/Context/MenuContext";

const StatusExecucao = () => {
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
        <div className="p-4 bg-white dark:bg-verde-dark">
          <ConsultaStatusExecucao />
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default StatusExecucao;
