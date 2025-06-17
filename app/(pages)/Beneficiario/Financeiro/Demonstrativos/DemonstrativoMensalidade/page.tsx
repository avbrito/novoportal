"use client";

import React from "react";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";
import Layout from "../../../../../components/Layout";
import { MenuProvider } from "../../../../..//components/Context/MenuContext";

const InfoIR = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.back();
  };

  return (
    <MenuProvider>
      <Layout>
        <div className="p-4 bg-white">
          <div className="min-h-screen bg-white">
            <div className="p-8 bg-white rounded-lg pl-40 pr-40">
              <div className="flex items-center mb-6">
                <span className="mt-1 cursor-pointer" onClick={handleRedirect}>
                  <ArrowLeftBlue />
                </span>
                <h1 className="text-2xl font-sans text-blue-black pl-2">
                  Demonstrativos de mensalidade
                </h1>
              </div>

              <div className="bg-white p-6 rounded-lg left-0 w-96">
                <h2 className="text-gray-700 font-semibold pl-2 pb-2 pt-2">
                  Selecione a competência
                </h2>
                <ul className="text-blue-black pl-2">
                  <a href="https://link.testfile.org/PDF10MB" target="_blank">
                    <li className="text-blue-link font-sans pb-5 cursor-pointer">
                      03/2025
                    </li>
                    <li className="text-blue-link font-sans pb-5 cursor-pointer">
                      02/2025
                    </li>
                    <li className="text-blue-link font-sans pb-5 cursor-pointer">
                      01/2025
                    </li>
                    <li className="text-blue-link font-sans pb-5 cursor-pointer">
                      12/2024
                    </li>
                    <li className="text-blue-link font-sans pb-5 cursor-pointer">
                      11/2024
                    </li>
                    <li className="text-blue-link font-sans pb-5 cursor-pointer">
                      10/2024
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default InfoIR;
