"use client";

import Layout from "../../components/Layout";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { cardData } from "../../utils/const";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import Head from "next/head";
import Link from "next/link";
import CampanhaModal from "../../components/CampanhaModal/index";
import axiosInstance from "../../utils/axiosInstance";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { SucessoCheck } from "@/app/components/Icons/SucessoCheck";
import { useSession } from "next-auth/react";

const userType = "cooperado";

const Cooperado = () => {
  const [userCards, setUserCards] = useState<any[]>([]);
  const [campanhaAtiva, setCampanhaAtiva] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedValor, setSelectedValor] = useState<string>("");
  const { data: session, status } = useSession();
  const userName = session?.user?.name || "Usuário";

  const crm = "123";
  const userInfo = {
    nomeCooperado: "Bruno Leal",
    cpf: "000.000.000-00",
    email: "cooperado@hotmail.com",
    ddd: "34",
    celular: "999999999",
    crm: "123",
  };

  useEffect(() => {
    if (userType) {
      setUserCards(cardData[userType] || []);
    }

    const campanhaRecusada = localStorage.getItem("campanhaRecusada");
    if (campanhaRecusada !== "true") {
      const fetchCampanha = async () => {
        try {
          const campanhaRes = await axiosInstance.get(
            "/cooperado/campanhas/getCampanhas"
          );
          const campanhas = campanhaRes.data.resultado;

          const campanha = campanhas?.[0];

          if (campanha) {
            setCampanhaAtiva(campanha);
            setShowModal(true);
          }
        } catch (error) {
          console.error("Erro ao buscar campanhas:", error);
        }
      };

      fetchCampanha();
    }
  }, []);

  const handleConfirmDoacao = async (valor: string) => {
    try {
      await axiosInstance.post("/cooperado/campanhas/postAceitecampanha", {
        ...userInfo,
        aceite: "Sim",
        nomeCampanha: campanhaAtiva.nomeCampanha,
        idCampanha: campanhaAtiva.idCampanha,
        valorDoacao: valor,
      });
      setShowModal(false);
      setSelectedValor(valor);
      setShowConfirmationModal(true);
    } catch (error) {
      console.error("Erro ao registrar doação:", error);
      alert("Houve um erro ao registrar a doação.");
    }
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const handleCloseModal = () => {
    localStorage.setItem("campanhaRecusada", "true");
    setShowModal(false);
  };

  return (
    <MenuProvider>
      <React.Fragment>
        <Head>
          <title>Cooperado - Bem-vindo</title>
        </Head>
        <Layout>
          <div className="p-4 bg-white dark:bg-verde-dark flex flex-col items-center">
            <h2 className="text-lg font-bold text-verde-unimed mb-4 pt-10">
              👋 Olá, {userName}
            </h2>
            <p className="text-4xl text-blue-dark mb-12 text-center font-bold pb-10">
              Como podemos te ajudar hoje?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg mx-auto">
              {userCards.map((card, index) => (
                <Link key={index} href={card.redirect?.href || "#"} passHref>
                  <div className="cursor-pointer h-full">
                    <Card
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                      redirect={card.redirect}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {showModal && campanhaAtiva && (
            <CampanhaModal
              campanha={campanhaAtiva}
              onConfirm={handleConfirmDoacao}
              onClose={handleCloseModal}
            />
          )}

          {showConfirmationModal && (
            <Dialog
              open={showConfirmationModal}
              onClose={handleCloseConfirmationModal}
              className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
              <Dialog.Panel className="w-80 bg-white rounded-lg p-6 max-w-md w-95 text-center justify-center">
                <div className="flex justify-center items-center mb-4">
                  <SucessoCheck />
                </div>

                <h2 className="text-xl font-bold mb-2 text-blue-black">
                  Obrigado por fazer parte da campanha!
                </h2>
                <p className="text-sm font-sans text-blue-medium mb-4 mt-4">
                  Sua contribuição foi registrada com sucesso e será debitada na
                  sua próxima produção médica. Seu apoio fortalece nossa
                  comunidade e faz a diferença para muitas pessoas. A sua doação
                  de R$ {selectedValor} foi registrada com sucesso! Agradecemos
                  sua contribuição.
                </p>
                <p className="text-sm text-blue-medium mb-4">
                  Valor da Contribuição <br /> <span className="font-bold text-blue-black text-lg"> R$ {selectedValor},00</span>
                </p>

                <div className="flex gap-4 justify-center mt-10">
                  <button
                    onClick={handleCloseConfirmationModal}
                    className="w-full h-10 rounded-lg sm:w-auto bg-transparent text-blue-black p-2"
                  >
                    Fechar
                  </button>
                  <Link href="/Cooperado/Campanhas">
                    <button className="w-full h-10 rounded-lg sm:w-auto bg-verde-unimed text-white p-2">
                      Acompanhar campanhas
                    </button>
                  </Link>
                </div>
              </Dialog.Panel>
            </Dialog>
          )}
        </Layout>
      </React.Fragment>
    </MenuProvider>
  );
};

export default Cooperado;
