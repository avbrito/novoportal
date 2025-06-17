"use client";

import { MenuProvider } from "@/app/components/Context/MenuContext";
import Layout from "@/app/components/Layout";
import React from "react";
import { useRouter } from "next/navigation";
import { demonstrativosEmpresa } from "@/app/utils/const";
import { ArrowRightBlack } from "@/app/components/Icons/ArrowRightBlack";

const Demonstrativos = () => {
  const router = useRouter();

  return (
    <MenuProvider>
      <Layout>
        <div className="max-w-4xl mx-auto p-8">
          <h2 className="flex items-center text-2xl text-blue-black dark:text-gray-200 font-sans my-10">
            <div onClick={() => router.push("/Empresa")} className="cursor-pointer">
            </div>
            <span className="ml-2">Demonstrativos</span>
          </h2>
          <div className="space-y-4">
            {demonstrativosEmpresa.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg border-gray-unimed hover:shadow-md transition flex justify-between items-center cursor-pointer gap-5"
                onClick={() => router.push(item.redirect.href)} 
              >
                <div>
                  <h2 className="text-lg font-medium text-blue-black dark:text-gray-200">{item.title}</h2>
                  <p className="text-sm text-blue-medium dark:text-gray-400">{item.description}</p>
                </div>
                <span className="text-gray-400 dark:text-white"><ArrowRightBlack /></span>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default Demonstrativos;
