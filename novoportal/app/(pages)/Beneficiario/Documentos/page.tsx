"use client";

import { manuaisPdf } from "../../../utils/const";
import { manuaisZip } from "../../../utils/const";
import Layout from "../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";

const Documentos = () => {
  return (
    <MenuProvider>
      <Layout>
        <div className="p-4 bg-white">
          <div className="w-full max-w-[808px] mx-auto pt-2 bg-white">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-sans text-blue-black">
                Documentos
              </h2>
            </div>

            <div className="mt-8">
              <h3 className="text-md font-sns text-gray-700">ZIP</h3>
              <div className="space-y-4 mt-4">
                {manuaisZip.map((item, index) => (
                  <a
                    key={index}
                    href={item.redirect.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center rounded-lg border border-gray-300 pb-4 pt-5 px-5 max-w-80"
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <img
                        src={item.photoUrl}
                        alt={item.name}
                        className="w-10 h-10"
                      />
                      <p className="pt-2 mr-10">{item.name}</p>
                      <p className="pt-2">{item.icon}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-md font-sans text-gray-700">PDF</h3>
              <div className="space-y-4 mt-4">
                {manuaisPdf.map((item, index) => (
                  <a
                    key={index}
                    href={item.redirect.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center rounded-lg border border-gray-300 pb-4 pt-5 px-5 max-w-80"
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <img
                        src={item.photoUrl}
                        alt={item.name}
                        className="w-10 h-10"
                      />
                      <p className="pt-2">{item.name}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default Documentos;
