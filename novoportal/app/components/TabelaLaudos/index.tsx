"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { laudosData } from "@/app/utils/const";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { ArrowDown } from "@/app/components/Icons/ArrowDown";
import { ArrowRightBlue } from "@/app/components/Icons/ArrowRightBlue";
import { Carteirinha } from "../Icons/Carteirinha";
import Pagination from "../Pagination";

const TabelaLaudos = () => {
  const router = useRouter();
  const handleRedirect = () => router.back();

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(laudosData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = laudosData.slice(startIndex, startIndex + itemsPerPage);
 
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-6">
          <button onClick={handleRedirect} className="flex items-center">
            <ArrowLeftBlue />
          </button>
          <h1 className="text-2xl font-semibold text-gray-800 pl-2">
            Atendimentos e Laudos
          </h1>
        </div>
        <div className="relative w-full max-w-md mb-6">
          <button className="w-full flex flex-col items-start border border-gray-300 rounded-lg p-3 text-gray-700">
            <span className="text-base font-medium">Bruno Leal</span>
            <span className="flex items-center text-gray-500 text-sm">
              <Carteirinha className="mr-2" />
              014 000000000 0
            </span>

            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <ArrowDown />
            </div>
          </button>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full bg-white text-left">
            <thead className="bg-gray-100">
              <tr className="text-gray-600 text-sm">
                <th className="p-3">Data</th>
                <th className="p-3">Guia</th>
                <th className="p-3">Título</th>
                <th className="p-3">Exames</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={index} className="border-t text-gray-700 text-sm">
                  <td className="p-3">{item.data}</td>
                  <td className="p-3">{item.guia}</td>
                  <td className="p-3">{item.titulo}</td>
                  <td className="p-3">{item.exames}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
        {/* <div className="flex justify-between items-center mt-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`flex items-center text-blue-600 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ArrowLeftBlue /> Anterior
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center text-blue-600 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Próxima <ArrowRightBlue />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TabelaLaudos;
