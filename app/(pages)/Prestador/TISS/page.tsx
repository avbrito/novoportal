"use client";

import Layout from "../../../components/Layout";
import React from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import Link from "next/link";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";

const TISS = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.back();
  };

  return (
    <MenuProvider>
      <Layout>
        <div className="p-4 bg-white">
          <div className="bg-white flex justify-center items-start">
            <div className="pt-2 bg-white w-full max-w-4xl">
              <div className="flex items-center mb-8 gap-2">
                <div onClick={handleRedirect} className="cursor-pointer">
                  <ArrowLeftBlue />
                </div>
                <h2 className="text-2xl font-sans text-blue-black">
                  Padrão TISS
                </h2>
              </div>
              <div className="bg-gray-100 rounded-md border border-gray-unimed text-sm text-blue-black px-8">
                <p className="mb-4 text-blue-black text-lg">
                  Coberturas (Conforme Rol de procedimentos da ANS)
                </p>
                <p className="mb-4 text-sm">
                  A Troca de Informações na Saúde Suplementar - TISS foi
                  estabelecida como um padrão obrigatório para as trocas
                  eletrônicas de dados de atenção à saúde dos beneficiários de
                  planos, entre os agentes da Saúde Suplementar. O objetivo é
                  padronizar as ações administrativas, subsidiar as ações de
                  avaliação e acompanhamento econômico, financeiro e
                  assistencial das operadoras de planos privados de assistência
                  à saúde e compor o Registro Eletrônico de Saúde. O padrão TISS
                  tem por diretriz a interoperabilidade entre os sistemas de
                  informação em saúde preconizados pela Agência Nacional de
                  Saúde Suplementar e pelo Ministério da Saúde, e, ainda, a
                  redução da assimetria de informações para os beneficiários de
                  planos privados de assistência à saúde.
                </p>
                <p className="mb-4">
                  O padrão TISS está organizado em cinco componentes:
                </p>
                <ul className="list-inside space-y-2 font-sans">
                  <li>
                    <strong>1) Organizacional</strong>
                    <br /> O componente organizacional do Padrão TISS estabelece
                    o conjunto de regras operacionais.
                  </li>
                  <li>
                    <strong>2)Conteúdo e estrutura</strong>
                    <br /> O componente de conteúdo e estrutura do Padrão TISS
                    estabelece a arquitetura dos dados utilizados nas mensagens
                    eletrônicas e no plano de contingência, para coleta e
                    disponibilidade dos dados de atenção à saúde.
                  </li>
                  <li>
                    <strong>3)Representação de Conceitos em Saúde</strong>
                    <br /> O componente de representação de conceitos em saúde
                    do Padrão TISS estabelece o conjunto de termos para
                    identificar os eventos e itens assistenciais na saúde
                    suplementar, consolidados na Terminologia Unificada da Saúde
                    Suplementar - TISS.
                  </li>
                  <li>
                    <strong>4)Segurança e Privacidade</strong>
                    <br /> O componente de segurança e privacidade do Padrão
                    TISS estabelece os requisitos de proteção para assegurar o
                    direito individual ao sigilo, à privacidade e à
                    confidencialidade dos dados de atenção à saúde. Tem como
                    base o sigilo profissional e segue a legislação.
                  </li>
                  <li>
                    <strong>5)Comunicação</strong>
                    <br /> O componente de comunicação do Padrão TISS estabelece
                    os meios e os métodos de comunicação das mensagens
                    eletrônicas definidas no componente de conteúdo e estrutura.
                    Adota a linguagem de marcação de dados XML - Extensible
                    Markup Language.
                  </li>
                </ul>
              </div>
              <div className=" text-2xl text-blue-black gap-2">
                <div className="py-6 px-8">
                  <p className="font-sans">Guia TISS</p>
                  <Link
                    href="http://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar"
                    className="text-blue-600 underline break-words text-sm font-sans"
                    target="_blank"
                  >
                    http://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar
                  </Link>
                </div>

                <div className="py-6 px-8">
                  <p className="font-sans">Web Services</p>
                  <p className="text-blue-regular text-sm font-sans">
                    Verificar elegibilidade
                  </p>
                  <Link
                    href="http://tissunimedvtrp.dugool.com:8080/tissunimedvtrp/ws/tissweb?wsdl"
                    className="text-blue-600 underline break-words text-sm font-sans"
                    target="_blank"
                  >
                    http://iris.unimeduberlandia.coop.br:8080/iris/?#/autorizacao/diversos/verificaElegibilidade
                  </Link>
                </div>

                <div className="py-6 px-8">
                  <p className="font-sans">Solicitação de Procedimentos</p>
                  <Link
                    href="http://iris.unimeduberlandia.coop.br:8080/iris/?#/autorizacao/sadt"
                    className="text-blue-600 underline break-words text-sm font-sans"
                    target="_blank"
                  >
                    http://iris.unimeduberlandia.coop.br:8080/iris/?#/autorizacao/sadt
                  </Link>
                </div>

                <div className="py-6 px-8">
                  <p className="font-sans">Cancelamento de Guias</p>
                  <Link
                    href="http://iris.unimeduberlandia.coop.br:8080/iris/?#/autorizacao/diversos/cancelamento-solicitacao"
                    className="text-blue-600 underline break-words text-sm font-sans"
                    target="_blank"
                  >
                    http://iris.unimeduberlandia.coop.br:8080/iris/?#/autorizacao/diversos/cancelamento-solicitacao
                  </Link>
                </div>

                <div className="py-6 px-8">
                  <p className="font-sans">Envio de guias para faturamento</p>
                  <Link
                    href="http://iris.unimeduberlandia.coop.br:8080/iris/?#/authenticate"
                    className="text-blue-600 underline break-words text-sm font-sans"
                    target="_blank"
                  >
                    http://iris.unimeduberlandia.coop.br:8080/iris/?#/authenticate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default TISS;
