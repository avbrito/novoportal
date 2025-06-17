"use client";

import Layout from "../../../components/Layout";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import React, { JSX } from "react";
import axios from "axios";
import AccordionPlanos from "@/app/components/AccordionPlanos/AccordionPlanos";

const PlanosAtendidos: React.FC = () => {
  return (
    <MenuProvider>
      <Layout>
        <div className="p-4 bg-white">
          <div className=" bg-white flex justify-center items-left">
            <div className="pt-2 bg-white w-full max-w-4xl">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-sans text-blue-black">
                  Planos atendidos
                </h2>
              </div>
              <div className="mt-8">
                <AccordionPlanos />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default PlanosAtendidos;
