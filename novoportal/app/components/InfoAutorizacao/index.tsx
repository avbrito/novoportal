import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/navigation";
import { eventsDate } from "../../utils/const";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";

const InfoAutorizacao = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-white ml-16">
      <div className="max-full mx-auto bg-white rounded-lg p-6">
        <div className="flex items-center mb-6">
          <span className="mt-1 cursor-pointer" onClick={handleRedirect}>
            <ArrowLeftBlue />
          </span>
          <h1 className="text-2xl font-sans text-blue-black pl-2">
            Status de Autorização
          </h1>
        </div>
        <p className="text-lg font-sans text-blue-black pl-2 mt-10">Hmm tenho certeza que devia ter algo aqui... 🤔✏️</p>
        <div className="bg-white text-blue-black rounded-lg p-6 w-1/2 mb-4"></div>
      </div>
    </div>
  );
};

export default InfoAutorizacao;
