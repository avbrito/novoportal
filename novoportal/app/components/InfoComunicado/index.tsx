"use client";

import { useState } from "react";
import Layout from "../../components/Layout";
import { comunicado } from "../../utils/const";
import Image from "next/image";

type Comunicado = {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  content: string;
  image: string | null;
};

export default function InfoComunicado() {
  const [selectedComunicado, setSelectedComunicado] = useState<Comunicado>(
    comunicado[0]
  );
  const [readComunicados, setReadComunicados] = useState<number[]>([]);

  const handleSelectComunicado = (item: Comunicado) => {
    setSelectedComunicado(item);
    if (!readComunicados.includes(item.id)) {
      setReadComunicados((prev) => [...prev, item.id]);
    }
  };

  const handleMarkAllAsRead = () => {
    const allIds = comunicado.map((item: Comunicado) => item.id);
    setReadComunicados(allIds);
  };

  return (

        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
          <div className="lg:w-1/3 bg-white shadow-md p-4">
            <div className="flex justify-between items-center mb-4 pt-5">
              <h2 className="text-lg font-semibold text-gray-800">Hoje</h2>
              <button
                className="text-blue-500 text-sm font-medium hover:underline"
                onClick={handleMarkAllAsRead}
              >
                Marcar todas como lidas
              </button>
            </div>
            <ul className="space-y-3">
              {comunicado.map((item: Comunicado) => (
                <li
                  key={item.id}
                  className={`p-3 rounded-md cursor-pointer transition ${
                    item.id === selectedComunicado.id
                      ? "bg-blue-100 border-l-4 border-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleSelectComunicado(item)}
                >
                  <h3 className="text-sm font-bold text-gray-800 flex items-center">
                    <span
                      className={`w-2.5 h-2.5 rounded-full mr-2 ${
                        readComunicados.includes(item.id)
                          ? "bg-gray-400"
                          : "bg-red-500"
                      }`}
                    ></span>
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500">{item.description}</p>
                  <span className="text-xs text-gray-400">
                    {item.timestamp}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-2/3 bg-white shadow-md pl-32 pr-32 pt-8">
            <h1 className="text-xl font-bold text-gray-800 mb-4">
              {selectedComunicado.title}
            </h1>
            <p className="text-gray-700 whitespace-pre-line mb-4">
              {selectedComunicado.content}
            </p>
            
            {selectedComunicado.image && selectedComunicado.image !== "" ? (
              <Image
                src={selectedComunicado.image}
                alt="Imagem do Comunicado"
                width={500} 
                height={300} 
                className="rounded-md shadow-md"
              />
            ) : (
              <p>Imagem não disponível</p> 
            )}
          </div>
        </div>
  );
}
