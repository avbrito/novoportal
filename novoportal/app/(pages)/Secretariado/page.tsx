"use client";

import Layout from "../../components/Layout";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { cardData } from "../../utils/const";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";


const userType = "secretariado"; 

const Secretariado = () => {
  const [userCards, setUserCards] = useState<any[]>([]);
  const { data: session, status } = useSession();
  const userName = session?.user?.name || "Usuário";
  
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
          <title>Secretariado - Bem-vindo</title>
          <meta
            name="description"
            content="Página inicial do secretariado, como podemos te ajudar hoje?"
          />
          <link
            rel="icon"
            href="https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2024/12/favicon.ico"
          />
        </Head>
        <Layout>
          <div className="p-4 bg-white dark:bg-verde-dark dark:text-white flex flex-col items-center">
            <h2 className="text-lg font-bold text-verde-unimed dark:text-white mb-4 text-center font-sansBold pt-10">
              👋 Olá, {userName}
            </h2>
            <p className="text-4xl text-blue-dark dark:text-white mb-12 text-center font-bold font-sansBold pb-10">
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
        </Layout>
      </React.Fragment>
    </MenuProvider>
  );
};

export default Secretariado;
