"use client";

import Layout from "../../../components/Layout";
import React, { useState, useEffect } from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import { documents } from "@/app/utils/const";

const Manuais = () => {
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
        <div className="max-w-2xl mx-auto p-6">
          <h2 className="text-2xl font-sans text-left text-blue-black dark:text-white">
            Manuais e Formulários
          </h2>

          {documents.map((section, index) => (
            <div key={index} className="mt-6">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {section.category}
              </h3>

              {section.files.map((file, i) => (
                <div
                  key={i}
                  className="flex items-center bg-white dark:bg-cinza-dark dark:border-gray-800border rounded-lg p-4 mt-3 border border-gray-unimed"
                >
                  <img
                    src="/pdf-image.png"
                    alt="PDF"
                    className="w-10 h-10 mr-4"
                  />
                  <a
                    href={file.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-black dark:text-white"
                  >
                    {file.name}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default Manuais;
