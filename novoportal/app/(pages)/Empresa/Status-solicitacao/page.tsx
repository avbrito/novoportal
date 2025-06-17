"use client";

import Layout from "../../../components/Layout";
import Solicitacao from "../../../components/Solicitacao";
import { MenuProvider } from "@/app/components/Context/MenuContext";


const StatusSolicitacao = () => {

  return (
    <MenuProvider>
    <Layout>
      <div className="p-4 bg-white">
      <Solicitacao />
      </div>
    </Layout>
    </MenuProvider>
  );
};

export default StatusSolicitacao;
