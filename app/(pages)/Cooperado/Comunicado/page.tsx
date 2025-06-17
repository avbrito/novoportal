"use client";

import { useState } from "react";
import Layout from "../../../components/Layout";
import { comunicado } from "../../../utils/const";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import InfoComunicado from "@/app/components/InfoComunicado";

type Comunicado = {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  content: string;
  image: string | null;
};

export default function Comunicado() {
  // const [ setSelectedComunicado] = useState<Comunicado>(
  //   comunicado[0]
  // );
  // const [readComunicados, setReadComunicados] = useState<number[]>([]);

  // // const handleSelectComunicado = (item: Comunicado) => {
  // //   setSelectedComunicado(item);
  // //   if (!readComunicados.includes(item.id)) {
  // //     setReadComunicados((prev) => [...prev, item.id]);
  // //   }
  // // };

  // // const handleMarkAllAsRead = () => {
  // //   const allIds = comunicado.map((item: Comunicado) => item.id);
  // //   setReadComunicados(allIds);
  // // };

  return (
    <MenuProvider>
      <Layout>
        <InfoComunicado />
      </Layout>
    </MenuProvider>
  );
}
