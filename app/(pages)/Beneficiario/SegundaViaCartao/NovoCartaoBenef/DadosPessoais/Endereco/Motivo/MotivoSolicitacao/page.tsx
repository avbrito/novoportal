"use client";

import { MenuProvider } from "@/app/components/Context/MenuContext";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/Layout";
import Link from "next/link";
import { Textarea } from "@headlessui/react";
import { DocAnexo } from "@/app/components/Icons/DocAnexo";
import { useState } from "react";
import { ArrowLeftBlack } from "@/app/components/Icons/ArrowLeftBlack";

const beneficiarios = [
  { motivo: "Não recebeu o Cartão" },
  { motivo: "Problema na tarja magnética" },
  { motivo: "Cartão roubado" },
  { motivo: "Cartão extraviado" },
  { motivo: "Cartão apagado" },
  { motivo: "Cartão quebrado" },
  { motivo: "Outro" },
];

export default function MotivoSolicitacao() {
  const router = useRouter();
  const handleRedirect = () => {
    router.back();
  };

  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(e.target.files || []);
    setFiles([...files, ...uploadedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleButtonClick = () => {
    router.push("/ConfirmPage?id=segundaVia");
  };

  return (
    <MenuProvider>
      <Layout>
        <div className="min-h-screen bg-white dark:bg-verde-dark p-6 flex ml-5 items-start">
          <div className="w-full max-w-md">
            <Link
              href="/reembolso"
              className="text-blue-500 flex items-center text-sm mb-6"
            >
              <span className="text-blue-500">2ª via de cartão&nbsp;</span>
              <span className="text-blue-500">&gt; Beneficiário&nbsp;</span>
              <span className="text-blue-500">&gt; Dados pessoais&nbsp;</span>
              <span className="text-blue-500">&gt; Endereço&nbsp;</span>
              <span className="text-gray-400"> &gt; Motivo</span>
            </Link>
            <div className="flex items-center w-full mb-6">
              <div
                onClick={() => router.push("/Beneficiario/SegundaViaCartao")}
                className="cursor-pointer"
              >
                <ArrowLeftBlue />
              </div>
              <h2 className="ml-2 text-2xl text-blue-black dark:text-white font-sans">
                Motivo
              </h2>
            </div>
            <div
              className="w-80 space-y-3"
              
            >
              <div
                className="p-4 mt-10 border rounded-lg flex justify-left items-center cursor-pointer hover:bg-gray-100 border-gray-unimed"
                onClick={handleRedirect}
              >
                <span className="text-gray-400">
                  <ArrowLeftBlack />
                </span>
                <div>
                  <p className="font-medium text-sm text-gray-900 dark:text-gray-400">
                    Outro
                  </p>
                </div>
              </div>

              <p className="text-sm text-black font-sans pt-6">
                Por qual motivo está solicitando uma 2ª via da carteirinha?
              </p>
              <Textarea
                className="w-full h-40 p-2 border mb-0 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-verde-dark dark:text-gray-200 dark:border-gray-600"
                placeholder="Descreva por que precisa de uma segunda via da carteirinha Unimed"
              />
              <p className="text-sm text-black font-sans pt-6">
                Adicione em anexo o boletim de ocorrência
              </p>
              <div className="mt-2 p-4 border-2 border-dashed border-gray-300 rounded-md text-center cursor-pointer">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="fileInput"
                />
                <label
                  htmlFor="fileInput"
                  className="flex flex-col items-center text-gray-500 cursor-pointer bg-gray-card"
                >
                  <DocAnexo />
                  Clique aqui para selecionar um arquivo
                </label>
              </div>
              <p className="text-sm text-gray-400">
                Extensões permitidas: PDF, DOC, DOCX, JPEG e PNG
              </p>
              <button
                type="submit"
                className="bg-verde-unimed text-white py-2 px-4 rounded-lg mt-6"
                onClick={handleButtonClick}
              >
                Enviar solicitação
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
}
