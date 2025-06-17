"use client";

import Layout from "../../../components/Layout";
import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import { cardData } from "../../../utils/const";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import Head from "next/head";
import Link from "next/link";


const userType = "sistemasCoop"; 

const FinanceiroDemonstrativos = () => {
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
          <title>Sistemas</title>
        </Head>
        <Layout>
          <div className="p-4 bg-white dark:bg-verde-dark dark:text-white flex flex-col items-center">
            <p className="text-4xl text-blue-dark dark:text-white mb-12 text-center font-bold font-sansBold pb-10">
              Sistemas
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-screen-lg mx-20">
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

export default FinanceiroDemonstrativos;
