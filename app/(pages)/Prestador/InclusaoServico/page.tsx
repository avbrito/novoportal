"use client";

import { formPdf } from "../../../utils/const";
import Layout from "../../../components/Layout";
import FormInclusao from "../../../components/FormInclusao";
import { useRouter } from "next/navigation";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";

const InclusaoServico = () => {
  const router = useRouter();
  const handleRedirect = () => router.back();

  return (
    <MenuProvider>
      <Layout>
        <div className="p-4 bg-white">
          <div className="bg-white flex justify-center">
            <div className="pt-2 bg-white w-full max-w-[808px] mx-auto">
              <div className="flex items-center mb-6">
                <button onClick={handleRedirect} className="flex items-center">
                  <ArrowLeftBlue />
                </button>
                <h1 className="text-2xl font-sans text-gray-800 pl-2">
                  Inclusão de serviço
                </h1>
              </div>
              <FormInclusao />
            </div>
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default InclusaoServico;
