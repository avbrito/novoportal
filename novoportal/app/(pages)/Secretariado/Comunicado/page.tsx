"use client";

import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoComunicado from "@/app/components/InfoComunicado";

export default function Comunicado() {
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
        <InfoComunicado />
      </Layout>
    </MenuProvider>
  );
}
