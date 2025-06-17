"use client";

import { MenuProvider } from "@/app/components/Context/MenuContext";
import GuideCard from "../../../components/GuideCard";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import Layout from "@/app/components/Layout";
import { QuestionEmpty } from "@/app/components/Icons/QuestionEmpty";
import { useRouter } from "next/navigation";

export default function TranscricaoGuias() {
  const router = useRouter();

  const guides = [
    {
      date: "20 Março 2024",
      code: "123456789012345678901",
      name: "Bruno Augusto Ferreira Leal",
      status: "Em análise",
      statusColor: "text-orange-500 bg-orange-100",
    },
    {
      date: "20 Março 2024",
      code: "123456789012345678901",
      name: "Bruno Augusto Ferreira Leal",
      status: "Autorizado",
      statusColor: "text-green-500 bg-green-100",
    },
    {
      date: "20 Março 2024",
      code: "123456789012345678901",
      name: "Bruno Augusto Ferreira Leal",
      status: "Negado",
      statusColor: "text-red-500 bg-red-100",
    },
  ];

  const handleRedirect = () => {
    router.back();
  };

  return (
    <MenuProvider>
      <Layout>
        <div className="flex flex-col w-full max-w-[808px] mx-auto mt-10 px-4">
          <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={handleRedirect}>
            <ArrowLeftBlue />
            <h1 className="text-2xl font-sans text-gray-800 dark:text-gray-200">
              Transcrição de guias
            </h1>
          </div>
          <div className="w-full max-w-md py-8">
            {guides.length === 0 ? (
              <div className="text-center py-8">
                <div className="mb-4 flex justify-center">
                  <QuestionEmpty />
                </div>
                <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-4">
                  Não há guias transcritas ainda.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Parece que você ainda não tem guias transcritos. Solicite uma nova autorização para começar.
                </p>
                <button
                  className="w-full bg-verde-unimed text-white py-2 rounded-lg hover:bg-green-700 mt-8"
                  onClick={() =>
                    router.push("/Beneficiario/TranscricaoGuias/NovaAutorizacao")
                  }
                >
                  Solicitar nova autorização
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {guides.map((guide, index) => (
                  <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() =>
                      router.push("/Beneficiario/TranscricaoGuias/SolicitacaoDetalhe")
                    }
                  >
                    <GuideCard {...guide} />
                  </div>
                ))}

                <button
                  className="w-60 bg-verde-unimed text-white py-2 rounded-lg hover:bg-green-700 mt-8"
                  onClick={() =>
                    router.push("/Beneficiario/TranscricaoGuias/NovaAutorizacao")
                  }
                >
                  Solicitar nova autorização
                </button>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
}
