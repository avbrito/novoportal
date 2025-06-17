"use client";

import React, { useEffect, useState } from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import Head from "next/head";
import Link from "next/link";
import { cardData } from "@/app/utils/const";
import Layout from "@/app/components/Layout";
import Card from "@/app/components/Card";

const userType = "documentacoes"; 

const DocumentacoesPage = () => {
  const [userCards, setUserCards] = useState<any[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (userType) {
      setUserCards(cardData[userType] || []);
    } else {
      setUserCards([]);
    }
  }, [userType]);

  return (
    <MenuProvider>
      <React.Fragment>
        <Head>
          <title>Prestador - Bem-vindo</title>
          <meta
            name="description"
            content="Página inicial de empresa, como podemos te ajudar hoje?"
          />
          <link
            rel="icon"
            href="https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2024/12/favicon.ico"
          />
        </Head>
        <Layout>
          <div className="p-4 bg-white dark:bg-verde-dark flex flex-col items-center mt-4">
            <p className="text-4xl text-blue-dark dark:text-gray-300 mb-12 text-center font-bold font-sansBold pb-10">
              Documentações e normas
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-screen-lg mx-auto">
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
        </Layout>
      </React.Fragment>
    </MenuProvider>
  );
};

export default DocumentacoesPage;
