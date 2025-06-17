"use client";

import Layout from "../../../components/Layout";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import React, { JSX } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { testeDadosContrato, testeCnp1 } from "../../../utils/const"; 

const DebitoAutomatico: React.FC = () => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nome = formData.get("nome") as string;
    const telefoneContato = formData.get("telefoneContato") as string;
    const banco = formData.get("banco") as string;
    const agencia = formData.get("agencia") as string;
    const conta = formData.get("conta") as string;
    const nomeEmpresa = formData.get("nomeEmpresa") as string;
    const cnpj = formData.get("cnpj") as string;
    const contrato = formData.get("contrato") as string;
    const email = formData.get("email") as string;

    if (!nome || !telefoneContato || !banco || !agencia || !conta) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const telefoneContato2 = telefoneContato.replace(/[()\s.-]/g, "");

    const descricao = `Cliente solicitou inclusão de débito automático. Empresa: ${nomeEmpresa}, Solicitante: ${nome}, CNPJ: ${cnpj}, Telefone Para Contato: ${telefoneContato}, Contrato: ${contrato}, Email: ${email}, Banco: ${banco}, Agência: ${agencia}, Conta: ${conta}`;

    const data_string = JSON.stringify({
      codigoOperadora: "0014",
      contratante: { contrato: contrato, id: "" },
      canalAtendimento: "3",
      descricao: descricao,
      setor: "1",
      telefone: telefoneContato2,
      categoria: "100",
      tipoManifestacao: "6",
      tipoProtocoloAtendimento: "1",
    });

    try {
      const response = await axios.post(
        "http://crm.unimeduberlandia.coop.br/crm/public/api/protocolo/externo/contratante",
        data_string,
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Length": data_string.length.toString(),
          },
        }
      );

      const protocoloRec = response.data.protocolo;
      if (protocoloRec) {
        alert(`Solicitação enviada com sucesso! Protocolo: ${protocoloRec}`);
      } else {
        alert("Erro ao enviar solicitação. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert(
        "Erro ao enviar solicitação. Verifique sua conexão e tente novamente."
      );
    }
  };

  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/ConfirmPage?id=debito"); 
  };

  return (
    <MenuProvider>
      <Layout>
        <section className="barra-servico flex justify-center items-center min-h-screen">
          <form
            onSubmit={handleSubmit}
            name="solicitar"
            className="w-full max-w-lg p-6 bg-white rounded-lg dark:bg-verde-dark dark:text-white"
          >
            <h1 className="text-2xl text-blue-black dark:text-white font-sans mb-10">
              Débito automático
            </h1>
            <p className="text-lg text-blue-black dark:text-white font-sans mb-5">Seus dados</p>
            <div className="form-boleto">
              <div className="defaultInput label-top inputCode text-blue-black">
                <label htmlFor="nome" className="dark:text-white">Nome da empresa*</label>
                <input
                  type="text"
                  name="nomeEmpresa"
                  placeholder="Digite o nome fantasia"
                  id="nomeEmpresa"
                  defaultValue={testeDadosContrato["resultado"][0]["nomeFantasia"]}
                  className="w-full my-5 border border-gray-300 rounded-lg p-2 text-blue-black dark:bg-gray-300"
                />
              </div>
              <div className="defaultInput label-top inputCode text-blue-black">
                <label htmlFor="nome" className="dark:text-white">Seu nome*</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                  id="nome"
                  defaultValue={""}
                  className="w-full my-5 border border-gray-300 rounded-lg p-2 text-blue-black dark:bg-gray-300"
                />
              </div>
              <div className="defaultInput label-top inputCode text-blue-black dark:text-white">
                <label htmlFor="cnpj">CNPJ*</label>
                <input
                  type="text"
                  name="cnpj"
                  placeholder="00.000.000/0000-00"
                  id="cnpj"
                  defaultValue={testeCnp1}
                  maxLength={14}
                  className="w-full my-5 border border-gray-300 rounded-lg p-2 text-blue-black dark:bg-gray-300"
                />
              </div>
              <div className="defaultInput label-top inputCode text-blue-black dark:text-white">
                <label htmlFor="telefoneContato">Telefone para contato*</label>
                <input
                  type="text"
                  name="telefoneContato"
                  placeholder="(00) 0 0000 0000"
                  id="telefoneContato"
                  defaultValue={testeDadosContrato["resultado"][0]["fone"]}
                  maxLength={15}
                  className="w-full my-5 border border-gray-300 rounded-lg p-2 text-blue-black dark:bg-gray-300"
                />
              </div>
              <div className="defaultInput label-top inputCode text-blue-black dark:text-white">
                <label htmlFor="contrato">Número do contrato*</label>
                <input
                  type="text"
                  name="contrato"
                  placeholder="(00) 0 0000 0000"
                  id="contrato"
                  defaultValue={testeDadosContrato["resultado"][0]["contrato"]}
                  maxLength={14}
                  className="w-full my-5 border border-gray-300 rounded-lg p-2 text-blue-black dark:bg-gray-300"
                />
              </div>
              <div className="defaultInput label-top inputCode text-blue-black dark:text-white">
                <label htmlFor="email">Email*</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  defaultValue={testeDadosContrato["resultado"][0]["email"]}
                  maxLength={120}
                  className="w-full my-5 border border-gray-300 rounded-lg p-2 text-blue-black dark:bg-gray-300"
                />
              </div>
              <p className="text-lg text-blue-black dark:text-white font-sans mb-5">
                Seus dados
              </p>
              <div className="defaultInput label-top inputCode text-blue-black dark:text-white">
                <label htmlFor="banco">Selecione o banco*</label>
                <select
                  name="banco"
                  id="banco"
                  defaultValue=""
                  className="w-full my-5 border border-gray-300 rounded-lg p-2 text-blue-black dark:bg-gray-300"
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option value="Santander">Santander</option>
                  <option value="Caixa">Caixa</option>
                  <option value="Itau">Itau</option>
                  <option value="Unicred">Unicred</option>
                  <option value="Brasil">Banco do Brasil</option>
                </select>
              </div>
              <div className="defaultInput label-top inputCode text-blue-black dark:text-white">
                <label htmlFor="agencia">Agência*</label>
                <input
                  type="text"
                  name="agencia"
                  id="agencia"
                  maxLength={20}
                  className="w-full my-5 border border-gray-300 rounded-lg p-2 text-blue-black dark:bg-gray-300"
                />
              </div>
              <div className="defaultInput label-top inputCode text-blue-black dark:text-white">
                <label htmlFor="conta">Conta*</label>
                <input
                  type="text"
                  name="conta"
                  id="conta"
                  maxLength={20}
                  className="w-full my-5 border border-gray-300 rounded-lg p-2 text-blue-black dark:bg-gray-300"
                />
              </div>
              <button
                type="submit"
                className="w-2/4 mt-4 p-2 bg-verde-unimed text-white rounded-lg"
                onClick={handleButtonClick}
              >
                Confirmar solicitação
              </button>
            </div>
          </form>
        </section>
      </Layout>
    </MenuProvider>
  );
};

export default DebitoAutomatico;
