// @ts-nocheck
"use client";

import Layout from "../../../components/Layout";
import React, { useState, useEffect } from "react";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import { CarteirinhaBlue } from "@/app/components/Icons/CarteirinhaBlue";
import { ArrowLeftBlue } from "@/app/components/Icons/ArrowLeftBlue";
import { dadosPessoais, dadosPlano, carencias } from "@/app/utils/const";
import { useRouter } from "next/navigation";
// import api from "@/app/apisTasy";
import Link from "next/link";
import FlipCardModal from "@/app/components/FlipCardModal";

const MeusDados = () => {
  const [cpf, setCpf] = useState("");
  const [nomeBeneficiario, setNomeBeneficiario] = useState("");
  const [cartao, setCartao] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [nomePlano, setNomePlano] = useState("");
  const [dadosCartaoLista, setDadosCartaoLista] = useState("");
  const [showFlipCard, setShowFlipCard] = useState(false);

  const dadosCartao = async () => {
    try {
      const response = await api.post("Cartao/dados", {
        cod_cartao: cartao,
      });

      if (response.data.resultado) {
        setDadosCartaoLista(response.data.resultado[0].cabecalho);
        setNomePlano(response.data.resultado[0].cabecalho.plano);
      } else {
        console.log("Erro ao buscar os dados do Cartao");
      }
    } catch (error) {
      console.log("Erro na requisição 'dadosCartao':", error);
    }
  };

  const router = useRouter();

  const handleRedirect = () => {
    router.back();
  };

  return (
    <MenuProvider>
      <Layout>
        <div className="bg-white min-h-screen py-10 px-4 flex justify-center">
          <div className="w-full max-w-[808px] space-y-8">
            <div className="bg-white min-h-screen py-10 px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span
                    className="flex items-center text-xl font-sans text-blue-black cursor-pointer"
                    onClick={handleRedirect}
                  >
                    <ArrowLeftBlue />
                    Meus dados
                  </span>
                </div>

                <div className="bg-white p-6 rounded-[9px] border border-gray-unimed">
                  <div className="flex justify-between mb-8">
                    <h2 className="text-2xl font-sans text-blue-black">
                      Seus dados
                    </h2>
                    <button
                      className="flex items-center border border-blue-500 text-blue-500 px-4 py-1 rounded-full"
                      onClick={() => setShowFlipCard((prev) => !prev)}
                    >
                      <CarteirinhaBlue />
                      Cartão digital
                    </button>
                  </div>
                  <div className="space-y-1 text-sm text-blue-black">
                    <p className="font-bold">Nome completo:</p>
                    <p className="font-sans">{dadosPessoais.nome}</p>
                    <p className="font-bold pt-5">CPF: </p>
                    <p className="font-sans">{dadosPessoais.cpf}</p>
                    <p className="font-bold pt-5">Data de nascimento: </p>
                    <p className="font-sans"> {dadosPessoais.nascimento}</p>
                    <p className="font-bold pt-5">CNS: </p>
                    <p className="font-sans">{dadosPessoais.cns}</p>
                    <p className="font-bold pt-5">Matrícula: </p>
                    <p className="font-sans"> {dadosPessoais.matricula}</p>
                    <p className="font-bold pt-5">Email: </p>
                    <p className="font-sans">{dadosPessoais.email}</p>
                    <p className="font-bold pt-5">Celular: </p>
                    <p className="font-sans">{dadosPessoais.celular}</p>
                    <p className="font-bold pt-5">Telefone: </p>
                    <p className="font-sans">{dadosPessoais.telefone}</p>
                    <p className="font-bold pt-5">Endereço: </p>
                    <p className="font-sans"> {dadosPessoais.endereco}</p>
                    <p className="font-bold pt-5">Complemento: </p>
                    <p className="font-sans"> {dadosPessoais.complemento}</p>
                    <p className="font-bold pt-5">Nome do contratante: </p>
                    <p className="font-sans"> {dadosPessoais.contratante}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-[9px] border border-gray-unimed">
                  <h2 className="text-xl font-sans text-blue-black mb-4">
                    Dados do plano
                  </h2>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p className="font-bold">Registro ANS: </p>
                    <p className="font-sans">{dadosPlano.registroANS}</p>
                    <p className="font-bold pt-5">Estabelecimento: </p>
                    <p className="font-sans">{dadosPlano.estabelecimento}</p>
                    <p className="font-bold pt-5">Código do Plano: </p>
                    <p className="font-sans">{dadosPlano.codigoPlano}</p>
                    <p className="font-bold pt-5">Nome do Plano: </p>
                    <p className="font-sans">{dadosPlano.nomePlano}</p>
                    <p className="font-bold pt-5">Número do Contrato: </p>
                    <p className="font-sans">{dadosPlano.numeroContrato}</p>
                    <p className="font-bold pt-5">Tipo de Contratação: </p>
                    <p className="font-sans">{dadosPlano.tipoContratacao}</p>
                    <p className="font-bold pt-5">Regulamentação: </p>
                    <p className="font-sans">{dadosPlano.regulamentacao}</p>
                    <p className="font-bold pt-5">Data da Contratação: </p>
                    <p className="font-sans">{dadosPlano.dataContratacao}</p>
                    <p className="font-bold pt-5">Início de Cobertura: </p>
                    <p className="font-sans">{dadosPlano.inicioCobertura}</p>
                    <p className="font-bold pt-5">Segmentação: </p>
                    <p className="font-sans">{dadosPlano.segmentacao}</p>
                    <p className="font-bold pt-5">Acomodação: </p>
                    <p className="font-sans">{dadosPlano.acomodacao}</p>
                    <p className="font-bold pt-5">Abrangência: </p>
                    <p className="font-sans">{dadosPlano.abrangencia}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-[9px] border border-gray-unimed">
                  <h2 className="text-xl font-sans text-blue-black mb-4">
                    Carências
                  </h2>
                  <p className="text-sm text-gray-700 mb-4">
                    As informações abaixo se referem exclusivamente às carências
                    contratuais. Caso esteja cumprindo uma Cobertura Parcial
                    Temporária (CPT) para algum procedimento, os prazos
                    específicos informados no documento da CPT devem ser
                    considerados.
                  </p>
                  <table className="w-full text-sm text-left text-gray-700">
                    <thead>
                      <tr className=" bg-verde-unimed text-white">
                        <th className="border-b p-5 font-bold rounded-tl-lg">
                          Categoria
                        </th>
                        <th className="border-b p-5 rounded-tr-lg">
                          Fim da carência
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {carencias.map((item, index) => (
                        <tr key={index}>
                          <td className="border-b p-4">{item.categoria}</td>
                          <td className="border-b p-4">{item.fimCarencia}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-blue-black">
                  * Planos ambulatoriais não possuem cobertura para internação.
                  Para mais informações,{" "}
                  <Link href="/Beneficiario/#">clique aqui</Link> e veja a
                  cobertura obrigatória de acordo com a segmentação do seu
                  plano.
                </p>
                <p className="text-blue-black">
                  ** Procedimentos cirúrgicos complexos não estão incluídos em
                  planos ambulatoriais.{" "}
                  <Link href="/Beneficiario/#">Consulte aqui</Link> para
                  conferir os detalhes sobre a cobertura conforme o seu plano.
                </p>
              </div>
            </div>
          </div>
          <FlipCardModal
            dadosCartaoLista={dadosCartaoLista}
            showFlipCard={showFlipCard}
            setShowFlipCard={setShowFlipCard}
          />
        </div>
      </Layout>
    </MenuProvider>
  );
};

export default MeusDados;
