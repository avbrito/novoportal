"use client";

import Sucesso from "@/app/components/Sucesso";
import { SucessoCheck } from "@/app/components/Icons/SucessoCheck";
import { MenuProvider } from "@/app/components/Context/MenuContext";
import Layout from "@/app/components/Layout";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const messages = {
  pagamentoEmpresa: {
    title: "Pagamento efetuado com sucesso",
    subtitle:
      "O pagamento da sua negociação foi processado e seu plano está regularizado. O comprovante da transação foi enviado para o e-mail email@dominio.com. Se precisar de suporte ou tiver dúvidas, estamos à disposição na nossa central de atendimento.",
    redirectTo: "/Empresa",
  },
  debito: {
    title: "Débito automático solicitado com sucesso.",
    subtitle: "Sua solicitação foi registrada com o Protocolo nº 2023123456.",
    redirectTo: "/Empresa",
  },
  solicitacao: {
    title: "Solicitação enviada",
    subtitle:
      "Sua solicitação foi enviada com sucesso e está em análise. Você receberá um retorno em breve.",
    redirectTo: "/Solicitacoes",
  },
  inclusao: {
    title: "Solicitação enviada com sucesso",
    subtitle:
      "Sua inclusão de serviço está em análise e em breve você receberá uma atualização.",
    redirectTo: "/Prestador",
  },
  pagamentoBeneficiario: {
    title: "Pagamento efetuado com sucesso",
    subtitle:
      "O pagamento da sua negociação foi processado e seu plano está regularizado. O comprovante da transação foi enviado para o e-mail email@dominio.com. Se precisar de suporte ou tiver dúvidas, estamos à disposição na nossa central de atendimento.",
    redirectTo: "/Beneficiario",
  },
  reembolso: {
    title: "Seu reembolso foi solicitado com sucesso!",
    subtitle:
      "Estamos revisando sua solicitação e entraremos em contato para orientá-lo nos próximos passos. Protocolo nº 2023123456.",
    redirectTo: "/Beneficiario",
  },
  autorizacao: {
    title: "Autorização solicitada com sucesso",
    subtitle:
      "Você será informado assim que os resultados dos exames laboratoriais, de imagem ou de genética estiverem disponíveis. Protocolo nº 2023123456.",
    redirectTo: "/Beneficiario",
  },
  segundaVia: {
    title: "Solitação de 2ª via de cartão enviada com sucesso!",
    subtitle:
      "Estamos revisando sua solicitação e entraremos em contato para orientá-lo nos próximos passos. Protocolo nº 2023123456.",
    redirectTo: "/Empresa",
  },
};

const ConfirmPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams?.get("id") || "pagamento";

  const { title, subtitle, redirectTo } =
    messages[id as keyof typeof messages] || messages.pagamentoEmpresa;

  const handleButtonClick = () => {
    router.push(redirectTo);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-verde-dark -mt-10">
      <Sucesso
        icon={<SucessoCheck />}
        title={title}
        subtitle={subtitle}
        buttonText="Voltar para página inicial"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

const ConfirmPage = () => (
  <MenuProvider>
    <Layout>
      <Suspense fallback={<div>Carregando...</div>}>
        <ConfirmPageContent />
      </Suspense>
    </Layout>
  </MenuProvider>
);

export default ConfirmPage;
