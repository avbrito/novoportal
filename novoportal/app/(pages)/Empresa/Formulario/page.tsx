"use client";

import { formPdf } from "../../../utils/const";
import Layout from "../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";

const Formulario = () => {
  
  return (
    <MenuProvider>
      <Layout>
        <div className="p-4 bg-white">
          <div className=" bg-white flex justify-center items-left">
            <div className="pt-2 bg-white w-full max-w-4xl">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-sans text-blue-black">
                  Formulários médicos
                </h2>
              </div>
              <div className="mt-8">
                <h3 className="text-md font-semibold text-gray-700">Anexos</h3>
                <button className="space-y-4 mt-4">
                  {formPdf.map((item, index) => (
                    <a
                      key={index}
                      href={item.redirect.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block flex justify-between space-around rounded-lg border border-gray-300 pb-4 pt-5 px-5 max-w-80 m-0"
                    >
                      <div className="flex text-sm gap-2 grid-cols-2 text-gray-700">
                        <img
                          src={item.photoUrl} 
                          alt={item.name}
                          className="w-10 h-10"
                        />
                        <p className="pt-2">{item.name}</p>
                      </div>
                    </a>
                  ))}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default Formulario;
