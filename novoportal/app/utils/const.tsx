"use client";

import { User } from "../components/Icons/User";
import { Empresa } from "../components/Icons/Empresa";
import { Medico } from "../components/Icons/Medico";
import { Secretaria } from "../components/Icons/Secretaria";
import { Prestador } from "../components/Icons/Prestador";
import { House } from "../components/Icons/House";
import { Form } from "../components/Icons/Form";
import { Documents } from "../components/Icons/Documents";
import { Manual } from "../components/Icons/Manual";
import { Play } from "../components/Icons/Play";
import { Money } from "../components/Icons/Money";
import { NotificationBell } from "../components/Icons/NotificationBell";
import { Help } from "../components/Icons/Help";
import { Download } from "../components/Icons/Download";
import { Cooperativo } from "../components/Icons/Cooperativo";
import { BMJ } from "../components/Icons/BMJ";
import { IR } from "../components/Icons/IR";
import { Calendario } from "../components/Icons/Calendario";
import { Valoriza } from "../components/Icons/Valoriza";
import { ProdMedica } from "../components/Icons/ProdMedica";
import { Doc } from "../components/Icons/Doc";
import { Boleto } from "../components/Icons/Boleto";
import { Cartao } from "../components/Icons/Cartao";
import { Grafico } from "../components/Icons/Grafico";
import { Agenda } from "../components/Icons/Agenda";
import { Prancheta } from "../components/Icons/Prancheta";
import { url } from "inspector";
import Settings from "../components/Icons/Settings";
import PrestadorServicos from "../components/Icons/PrestadorServicos";
import SolicitacaoStatus from "../components/Icons/SolicitacaoStatus";
import FinanceiroDemonstrativo from "../components/Icons/FinanceiroDemonstrativo";
import DocumentacoesNorma from "../components/Icons/DocumentacoesNorma";
import GLPI from "../components/Icons/GLPI";
import Irys from "../components/Icons/IRYS";
import Calendar from "../components/Icons/Calendar";
import SLine from "../components/Icons/SLine";
import ReceitaIcon from "../components/Icons/Receita";
import { Telemedicina } from "../components/Icons/Telemedicina";
import { Estetoscopio } from "../components/Icons/Estetoscopio";
import { Transcricao } from "../components/Icons/Transcricao";
import { Exames } from "../components/Icons/Exames";
import { Financeiro } from "../components/Icons/Financeiro";
import AIcon from "../components/Icons/A";
import DIcon from "../components/Icons/D";
import EIcon from "../components/Icons/E";
import GIcon from "../components/Icons/G";
import IIcon from "../components/Icons/I";
import MIcon from "../components/Icons/M";
import NIcon from "../components/Icons/N";
import PIcon from "../components/Icons/P";
import QIcon from "../components/Icons/Q";
import RIcon from "../components/Icons/R";
import SIcon from "../components/Icons/S";
import { GuiaMedico } from "../components/Icons/GuiaMedico";
import { DocumentsTwo } from "../components/Icons/DocumentsTwo";
import { Clube } from "../components/Icons/Clube";
import { Noticias } from "../components/Icons/Noticias";
import { Fale } from "../components/Icons/Fale";
import { redirect } from "next/dist/server/api-utils";
import { Trofeu } from "../components/Icons/Trofeu";
import { Sistemas } from "../components/Icons/Sistemas";
import { DocBusca } from "../components/Icons/DocBusca";
import { Paper } from "../components/Icons/Paper";
import { Campanha } from "../components/Icons/Campanha";
import { TissIcon } from "../components/Icons/TISS";
import { ImpostoRenda } from "../components/Icons/ImpostoRenda";
import { Extrato } from "../components/Icons/Extrato";
import { Planos } from "../components/Icons/Planos";
import { NewDoc } from "../components/Icons/NewDoc";
import { CartaoSegundaVia } from "../components/Icons/CartaoSegundaVia";

type LogoInfo = {
  id: string;
  src: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
};

export const OPTIONS = [
  {
    id: 1,
    label: "Sou uma pessoa física",
    icon: User,
    redirect: { href: "/AcessPF" },
    userType: "pessoaFisica" as const,
  },
  {
    id: 2,
    label: "Represento uma empresa",
    icon: Empresa,
    redirect: { href: "/AcessEmpresa" },
    userType: "empresa" as const,
  },
  {
    id: 3,
    label: "Sou um médico cooperado",
    icon: Medico,
    redirect: { href: "/AcessCoop" },
    userType: "cooperado" as const,
  },
  {
    id: 4,
    label: "Sou secretariado",
    icon: Secretaria,
    redirect: { href: "/AcessSecretariado" },
    userType: "secretariado" as const,
  },
  {
    id: 5,
    label: "Sou prestador de serviços",
    icon: Prestador,
    redirect: { href: "/AcessPrestador" },
    userType: "prestador" as const,
  },
];

export const USER_TYPES = {
  CPF: {
    label: "CPF",
    placeholder: "Digite seu CPF",
    validation: "cpf",
  },
  CNPJ: {
    label: "CNPJ",
    placeholder: "Digite seu CNPJ",
    validation: "cnpj",
  },
  CRM: {
    label: "CRM",
    placeholder: "Digite seu CRM",
    validation: "crm",
  },
  CodUnimed: {
    label: "Código Unimed",
    placeholder: "Digite seu código Unimed",
    validation: "codUnimed",
  }, 
  Usuario: {
    label: "Usuário",
    placeholder: "Digite seu usuário",
    validation: "usuario",
  },

};

export const PLACEHOLDERS = {
  cpf: "Digite seu CPF",
  senha: "Digite sua senha",
};

export const BUTTON_TEXT = {
  login: "Entrar",
};

export const LINK_TEXT = {
  forgotPassword: "Esqueci minha senha",
};

export const SIDEBAR_OPTIONS = {
  secretariado: [
    {
      id: 1,
      label: "Página Inicial",
      icon: House,
      redirect: { href: "/Secretariado" },
    },
    {
      id: 20,
      label: "Sistemas",
      icon: Sistemas,
    },
    {
      id: 3,
      label: "Status Solicitações",
      icon: DocBusca,
      redirect: { href: "/Secretariado/Status-solicitacao" },
    },
    {
      id: 4,
      label: "Documentos",
      icon: Paper,
      redirect: { href: "/Secretariado/Documentos" },
    },
    {
      id: 5,
      label: "Portal do conhecimento",
      icon: Play,
      redirect: { href: "/Secretariado/Portalconhecimento" },
    },
    {
      id: 6,
      label: "Programa de incentivo",
      icon: Trofeu,
      redirect: { href: "/Secretariado/Programaincentivo" },
    },
    {
      id: 7,
      label: "Comunicados",
      icon: NotificationBell,
      redirect: { href: "/Secretariado/Comunicado" },
    },
  ],
  cooperado: [
    { id: 1, label: "Início", icon: House, redirect: { href: "/Cooperado" } },
    {
      id: 2,
      label: "Valoriza Cooperado",
      icon: Valoriza,
      redirect: { href: "https://valoriza.unimeduberlandia.coop.br/" },
    },
    {
      id: 3,
      label: "CooperAtivo",
      icon: Cooperativo,
      redirect: { href: "/Cooperado/Cooperativo" },
    },
    {
      id: 4,
      label: "Produção Médica",
      icon: ProdMedica,
      redirect: { href: "/Cooperado/ProducaoMedica" },
    },
    {
      id: 5,
      label: "BMJ",
      icon: BMJ,
      redirect: { href: "https://www.bmj.com/" },
    },
    {
      id: 60,
      label: "Financeiro e demonstrativos",
      icon: Money,
    },
    {
      id: 6,
      label: "Calendário",
      icon: Calendario,
      redirect: {
        href: "/Cooperado/FinanceiroDemonstrativos/CalendarioFechamento",
      },
    },
    {
      id: 7,
      label: "Atendimento e laudos",
      icon: Prancheta,
      redirect: { href: "/Cooperado/AtendimentoLaudos" },
    },
    {
      id: 8,
      label: "Status de solicitação eletrônica",
      icon: DocBusca,
      redirect: { href: "/Cooperado/Status-solicitacao" },
    },
    {
      id: 90,
      label: "Sistemas",
      icon: Sistemas,
    },
    {
      id: 10,
      label: "Documentos",
      icon: Doc,
      redirect: { href: "/Cooperado/Documentos" },
    },
    {
      id: 11,
      label: "Comunicados",
      icon: NotificationBell,
      redirect: { href: "/Cooperado/Comunicado" },
    },
    {
      id: 12,
      label: "Campanhas",
      icon: Campanha,
      redirect: { href: "/Cooperado/Campanhas" },
    },
    {
      id: 13,
      label: "Padrão TISS",
      icon: TissIcon,
      redirect: { href: "/Cooperado/TISS" },
    },
  ],
  pessoaFisica: [
    {
      id: 1,
      label: "Página Inicial",
      icon: House,
      redirect: { href: "/Beneficiario" },
    },
    {
      id: 2,
      label: "Meus dados",
      icon: User,
      redirect: { href: "/Beneficiario/MeusDados" },
    },
    {
      id: 3,
      label: "Telemedicina",
      icon: Telemedicina,
    },
    {
      id: 4,
      label: "Guia médico",
      icon: GuiaMedico,
      redirect: { href: "/Beneficiario/GuiaMedico" },
    },
    {
      id: 5,
      label: "Transcrição de guias",
      icon: Documents,
      redirect: { href: "/Beneficiario/TranscricaoGuias" },
    },
    {
      id: 6,
      label: "Exames e consultas",
      icon: Exames,
      redirect: { href: "/Beneficiario/ExamesConsultas" },
    },
    {
      id: 8,
      label: "Financeiro e demonstrativos",
      icon: Money,
    },
    {
      id: 88,
      label: "Documentos",
      icon: DocumentsTwo,
      redirect: { href: "/Beneficiario/Documentos" },
    },
    {
      id: 9,
      label: "Clube de vantagens",
      icon: Clube,
      redirect: {
        href: "https://clube.unimeduberlandia.coop.br/",
        target: "_blank",
      },
    },
    {
      id: 10,
      label: "Notícias Unimed",
      icon: Noticias,
      redirect: {
        href: "https://www.unimeduberlandia.coop.br/portal/noticias-unimed-uberlandia/",
        target: "_blank",
      },
    },
    {
      id: 11,
      label: "2ª via de cartão",
      icon: CartaoSegundaVia,
      redirect: { href: "/Beneficiario/SegundaViaCartao" },
    },
    {
      id: 12,
      label: "Fale conosco",
      icon: Fale,
      redirect: {
        href: "https://www.unimeduberlandia.coop.br/portal/fale-conosco/",
        target: "_blank",
      },
    },
  ],
  empresa: [
    {
      id: 1,
      label: "Página Inicial",
      icon: House,
      redirect: { href: "/Empresa" },
    },
    {
      id: 70,
      label: "Financeiro e demonstrativos",
      icon: Money,
    },
    {
      id: 3,
      label: "Calendário",
      icon: Calendario,
      redirect: { href: "/Empresa/Calendario" },
    },
    {
      id: 4,
      label: "Documentos",
      icon: Doc,
      redirect: { href: "/Empresa/Documentos" },
    },
    {
      id: 5,
      label: "Status de solicitação eletrônica",
      icon: DocBusca,
      redirect: { href: "/Empresa/Status-solicitacao" },
    },
    {
      id: 6,
      label: "2ª via de cartão",
      icon: CartaoSegundaVia,
      redirect: { href: "/Empresa/SegundaViaCartao" },
    },
  ],
  prestador: [
    {
      id: 1,
      label: "Página Inicial",
      icon: House,
      redirect: { href: "/Prestador" },
    },
    {
      id: 2,
      label: "Serviços",
      icon: Settings,
      redirect: { href: "/Prestador/Servicos" },
    },
    {
      id: 3,
      label: "Atendimento e Produção",
      icon: PrestadorServicos,
      redirect: { href: "/Prestador/AtendimentoeProducao" },
    },
    {
      id: 4,
      label: "Status de solicitação",
      icon: SolicitacaoStatus,
      redirect: { href: "/Prestador/Status-solicitacao" },
    },
    {
      id: 5,
      label: "Financeiro e demonstrativos",
      icon: FinanceiroDemonstrativo,
      redirect: { href: "/Prestador/Financeiro" },
    },
    {
      id: 6001,
      label: "Documentos",
      icon: NewDoc,
      redirect: { href: "/Prestador/Documentos" },
    },
    {
      id: 7001,
      label: "Calendario",
      icon: Calendario,
      redirect: { href: "/Prestador/Calendario" },
    },
    {
      id: 8001,
      label: "Comunicados",
      icon: NotificationBell,
      redirect: { href: "/Prestador/Comunicados" },
    },
    {
      id: 9001,
      label: "Planos atendidos",
      icon: Planos,
      redirect: { href: "/Prestador/PlanosAtendidos" },
    },
    {
      id: 10001,
      label: "Padrão TISS",
      icon: TissIcon,
      redirect: { href: "/Prestador/TISS" },
    },
  ],
};

export const cardData = {
  secretariado: [
    {
      icon: <Sistemas />,
      title: "Sistemas",
      description:
        "Acesse os sistemas essenciais do dia a dia, como IRYS e GLPI, de forma rápida e centralizada.",
      redirect: { href: "/Secretariado/Sistemas" },
    },
    {
      icon: <DocBusca />,
      title: "Status Solicitações",
      description:
        "Consulte solicitações de clientes por protocolo e acesse detalhes sobre consultas, exames e atendimentos.",
      redirect: { href: "/Secretariado/Status-solicitacao" },
    },
    {
      icon: <Paper />,
      title: "Documentos",
      description:
        "Encontre guias, manuais e formulários necessários para suas solicitações.",
      redirect: { href: "/Secretariado/Documentos" },
    },
    {
      icon: <Play />,
      title: "Portal do conhecimento",
      description:
        "Acesse guias, vídeos e manuais para aprender a usar a plataforma IRYS e entender processos como recurso de glosa e solicitações.",
      redirect: { href: "/Secretariado/Portalconhecimento" },
    },
    {
      icon: <Trofeu />,
      title: "Programas de incentivo",
      description:
        "Acumule pontos com treinamentos e ganhe benefícios, como seguro de vida, day off, vouchers e mais.",
      redirect: { href: "/Secretariado/Programaincentivo" },
    },
    // {
    //   icon: <Form />,
    //   title: "Formulários Médicos",
    //   description:
    //     "Acesse aqui todos os formulários para solicitações médicas e encaminhamentos de pacientes.",
    //   redirect: { href: "/Secretariado/Formulario" },
    // },
    // {
    //   icon: <Manual />,
    //   title: "Manuais",
    //   description:
    //     "Manuais em vídeo, PDF e Excel com instruções para funções no Iris, puericultura, biometria e mais.",
    //   redirect: { href: "/Secretariado/Manuais" },
    // },
    {
      icon: <NotificationBell />,
      title: "Comunicados",
      description:
        "Manuais em vídeo, PDF e Excel com instruções para funções no Iris, puericultura, biometria e mais.",
      redirect: { href: "/Secretariado/Comunicado" },
    },
  ],
  financeiroDemonstrativos: [
    {
      icon: <Money />,
      title: "Pagamentos",
      description:
        "Visualize boletos, histórico de pagamentos e negocie dívidas de forma prática e segura",
      redirect: { href: "/Cooperado/FinanceiroDemonstrativos/Pagamentos" },
    },
    {
      icon: <ImpostoRenda />,
      title: "Informe de Imposto de Renda",
      description:
        "Acesse e baixe seu informe de rendimentos para a declaração do Imposto de Renda.",
      redirect: { href: "/Cooperado/FinanceiroDemonstrativos/IR" },
    },
    {
      icon: <Grafico />,
      title: "Demonstrativos",
      description:
        "Acesse demonstrativos financeiros e de coparticipação de sua empresa.",
      redirect: { href: "/Cooperado/FinanceiroDemonstrativos/Demonstrativos" },
    },
    {
      icon: <Extrato />,
      title: "Extratos",
      description:
        "Acesse extratos financeiros vinculados à sua produção e repasses.",
      redirect: {
        href: "https://iris.unimeduberlandia.coop.br/iris/#/authenticate",
      },
    },
    {
      icon: <Extrato />,
      title: "Extrato de distribuição de sobra",
      description:
        "Consulte os valores das sobras distribuídas pela cooperativa.",
      redirect: {
        href: "https://iris.unimeduberlandia.coop.br/iris/#/authenticate",
      },
    },
    {
      icon: <Calendario />,
      title: "Fechamento",
      description: "Datas e dados de fechamento mensal da produção médica.",
      redirect: {
        href: "/Cooperado/FinanceiroDemonstrativos/CalendarioFechamento",
      },
    },
    {
      icon: <Money />,
      title: "Cota capital",
      description:
        "Acompanhe o saldo e movimentações da sua cota capital na cooperativa.",
      redirect: { href: "/Cooperado/FinanceiroDemonstrativos/CotaCapital" },
    },
  ],
  sistemas: [
    {
      icon: <Help />,
      title: "Irys",
      description: "Acesse os sistemas IRYS",
      redirect: {
        href: "https://iris.unimeduberlandia.coop.br/iris/#/authenticate",
      },
    },
    {
      icon: <Help />,
      title: "GLPI",
      description: "Acesse os sistemas GLPI",
      redirect: { href: "https://glpi.unimeduberlandia.coop.br/login.php" },
    },
  ],
  cooperado: [
    {
      icon: <Valoriza />,
      title: "Valoriza Cooperado",
      description:
        "Acompanhe seus dados econômicos e financeiros em um só lugar, de forma prática e clara.",
      redirect: { href: "https://valoriza.unimeduberlandia.coop.br/" },
    },
    {
      icon: <Cooperativo />,
      title: "CooperAtivo",
      description:
        "Ganhe pontos ao assistir cursos e palestras e troque por benefícios exclusivos, como bônus e day off.",
      redirect: { href: "/Cooperado/Cooperativo" },
    },
    {
      icon: <Documents />,
      title: "Produção Médica",
      description:
        "Monitore sua receita em tempo real e acompanhe os resultados do seu trabalho no mês.",
      redirect: { href: "/Cooperado/ProducaoMedica" },
    },
    {
      icon: <Money />,
      title: "Financeiro e demonstrativos",
      description: "Consulte pagamentos, extratos e reembolsos do seu plano",
      redirect: { href: "/Cooperado/FinanceiroDemonstrativos" },
    },
    {
      icon: <BMJ />,
      title: "BMJ",
      description:
        "Acesse facilmente o site da BMJ para conferir informações e atualizações médicas importantes.",
      redirect: { href: "https://www.bmj.com/" },
    },
    {
      icon: <Calendario />,
      title: "Calendário",
      description:
        "Veja as datas importantes de fechamento e mantenha sua rotina sempre organizada.",
      redirect: {
        href: "/Cooperado/FinanceiroDemonstrativos/CalendarioFechamentoo",
      },
    },
    {
      icon: <Prancheta />,
      title: "Atendimentos e Laudos",
      description:
        "Baixe rapidamente os laudos médicos disponíveis e acesse seus exames e resultados de forma prática pelo portal.",
      redirect: { href: "/Cooperado/AtendimentoseLaudos" },
    },
    {
      icon: <DocBusca />,
      title: "Status de solicitação eletrônica",
      description:
        "Consulte solicitações de clientes por protocolo e acesse detalhes sobre consultas, exames e atendimentos.",
      redirect: { href: "/Cooperado/Status-solicitacao" },
    },
    {
      icon: <Sistemas />,
      title: "Sistemas",
      description:
        "Acesse os sistemas essenciais do dia a dia, como IRYS, GLPI e outros de forma rápida e centralizada.",
      redirect: { href: "/Cooperado/Sistemas" },
    },
    {
      icon: <Doc />,
      title: "Documentos",
      description:
        "Monitore sua receita em tempo real e acompanhe os resultados do seu trabalho no mês.",
      redirect: { href: "/Cooperado/Documentos" },
    },
    {
      icon: <NotificationBell />,
      title: "Comunicados",
      description: "Fique por dentro dos avisos e atualizações da Unimed.",
      redirect: { href: "/Cooperado/Comunicados" },
    },
    {
      icon: <Campanha />,
      title: "Campanhas",
      description: "Conheça e participe das campanhas de saúde e bem-estar.",
      redirect: { href: "/Cooperado/Campanhas" },
    },
    {
      icon: <TissIcon />,
      title: "Padrão TISS",
      description:
        "Acesse guias, lotes e arquivos conforme o padrão obrigatório da ANS.",
      redirect: { href: "/Cooperado/TISS" },
    },
  ],
  sistemasCoop: [
    {
      icon: <Help />,
      title: "Irys",
      description: "Acesse os sistemas IRYS",
      redirect: {
        href: "https://iris.unimeduberlandia.coop.br/iris/#/authenticate",
      },
    },
    {
      icon: <Help />,
      title: "GLPI",
      description: "Acesse os sistemas GLPI",
      redirect: { href: "https://glpi.unimeduberlandia.coop.br/login.php" },
    },
    {
      icon: <Help />,
      title: "CID Data SUS",
      description:
        "Consulta de códigos CID utilizados nos atendimentos registrados no DataSUS.",
      redirect: { href: "https://datasus.saude.gov.br/" },
    },
    {
      icon: <Help />,
      title: "Portal do conhecimento",
      description:
        "Capacitação online para colaboradores com cursos e emissão de certificados.",
      redirect: { href: "/Cooperado/Sistemas/Portalconhecimento" },
    },
  ],
  pessoaFisica: [
    {
      icon: <User />,
      title: "Meus dados",
      description:
        "Veja e atualize seus dados pessoais e informações do seu plano. ",
      redirect: { href: "/Beneficiario/MeusDados" },
    },
    {
      icon: <Telemedicina />,
      title: "Telemedicina",
      description: "Consulte médicos online de forma rápida e segura",
      redirect: { href: "/Beneficiario/" },
    },
    {
      icon: <GuiaMedico />,
      title: "Guia médico",
      description:
        "Encontre profissionais e unidades de atendimento da rede credenciada.",
      redirect: { href: "/Beneficiario/GuiaMedico" },
    },
    {
      icon: <Transcricao />,
      title: "Transcrição de guias",
      description: "Acesse e acompanhe suas guias médicas digitalizadas",
      redirect: { href: "/Beneficiario/TranscricaoGuias" },
    },
    {
      icon: <Exames />,
      title: "Exames e consultas",
      description: "Veja seu histórico de exames e consultas realizadas",
      redirect: { href: "/Beneficiario/ExamesConsultas" },
    },
      {
      icon: <DocBusca />,
      title: "Status de solicitação",
      description: "Consulte solicitações de clientes por protocolo e acesse detalhes sobre consultas, exames e atendimentos.",
      redirect: { href: "/Beneficiario/Status-solicitacao" },
    },
    {
      icon: <Financeiro />,
      title: "Financeiro e demonstrativos",
      description: "Consulte pagamentos, extratos e reembolsos do seu plano",
      redirect: { href: "/Beneficiario/FinanceiroDemonstrativos" },
    },
    {
      icon: <Doc />,
      title: "Documentos",
      description: "Encontre guias, manuais e formulários necessários para suas solicitações.",
      redirect: { href: "/Beneficiario/Documentos" },
    },
    {
      icon: <Doc />,
      title: "Clube de vantagens",
      description: "Confira descontos e benefícios exclusivos para você, cliente Unimed.",
      redirect: { href: "https://clube.unimeduberlandia.coop.br/" },
    },
    {
      icon: <Noticias />,
      title: "Notícias Unimed",
      description: "Acesse as últimas atualizações e informações importantes sobre a Unimed, incluindo novidades e comunicados",
      redirect: { href: "https://www.unimeduberlandia.coop.br/portal/noticias-unimed-uberlandia/" },
    },
    {
      icon: <CartaoSegundaVia />,
      title: "2ª via de cartão",
      description: "Solicite uma 2ª via da carteirinha do seu plano.",
      redirect: { href: "/Beneficiario/SegundaViaCartao" },
    },
        {
      icon: <Fale />,
      title: "Fale Conosco",
      description: "Entre em contato com a Unimed para dúvidas, sugestões ou solicitações.",
      redirect: { href: "https://www.unimeduberlandia.coop.br/portal/fale-conosco/" },
    },
  ],
  empresa: [
    {
      icon: <Money />,
      title: "Financeiro e demonstrativos",
      description:
        "Consulte e regularize seus pagamentos e demonstrativos de forma rápida.",
      redirect: { href: "/Empresa/FinanceiroDemonstrativos" },
    },
    {
      icon: <Calendario />,
      title: "Calendário",
      description:
        "Consulte prazos e datas importantes para movimentações no seu contrato.",
      redirect: { href: "/Empresa/Calendario" },
    },

    {
      icon: <Doc />,
      title: "Documentos",
      description:
        "Encontre guias, manuais e formulários necessários para suas solicitações.",
      redirect: { href: "/Empresa/Documentos" },
    },
    {
      icon: <DocBusca />,
      title: "Status de solicitação eletrônica",
      description:
        "Acompanhe o status de execução de processos e solicitações da sua empresa.",
      redirect: { href: "/Empresa/Status-solicitacao" },
    },
    {
      icon: <CartaoSegundaVia />,
      title: "2ª via de cartão",
      description: "Solicite uma 2ª via da carteirinha do seu plano.",
      redirect: { href: "/Empresa/SegundaViaBoleto" },
    },
  ],
  financeiroDemonstrativosEmpresa: [
    {
      icon: <Money />,
      title: "Pagamentos",
      description:
        "Consulte e regularize seus pagamentos pessoais de forma rápida.",
      redirect: { href: "/Empresa/FinanceiroDemonstrativos/Pagamentos" },
    },
    {
      icon: <Cartao />,
      title: "Débito automático",
      description:
        "Configure o débito automático para simplificar os pagamentos da sua empresa.",
      redirect: { href: "/Empresa/FinanceiroDemonstrativos/DebitoAutomatico" },
    },
    {
      icon: <Grafico />,
      title: "Demonstrativos",
      description:
        "Acesse demonstrativos financeiros e de coparticipação de sua empresa.",
      redirect: { href: "/Empresa/FinanceiroDemonstrativos/Demonstrativos" },
    },
  ],
  financeiroDemonstrativosBeneficiario: [
    {
      icon: <Money />,
      title: "Pagamentos",
      description:
        "Acesse 2ª via de boletos e histórico de pagamentos de forma rápida e prática.",
      redirect: { href: "/Beneficiario/FinanceiroDemonstrativos/Pagamentos" },
    },
    {
      icon: <Money />,
      title: "Quitação anual de dividas",
      description:
        "Negocie e quite suas dívidas com opções de parcelamento e pagamento por cartão.",
      redirect: { href: "/Beneficiario/FinanceiroDemonstrativos/Pagamentos" },
    },
    {
      icon: <Money />,
      title: "Extratos",
      description:
        "Acesse extratos financeiros vinculados à sua produção e repasses.",
      redirect: { href: "/Beneficiario/FinanceiroDemonstrativos/Pagamentos" },
    },
    {
      icon: <Grafico />,
      title: "Demonstrativos",
      description:
        "Acesse demonstrativos financeiros e de coparticipação de sua empresa.",
      redirect: { href: "/Beneficiario/FinanceiroDemonstrativos/Demonstrativos" },
    },
        {
      icon: <IR />,
      title: "Demonstrativos",
      description:
        "Acesse e baixe seu informe de rendimentos para a declaração do Imposto de Renda.",
      redirect: { href: "/Beneficiario/FinanceiroDemonstrativos/Demonstrativos" },
    },
    {
      icon: <Money />,
      title: "Reembolso",
      description:
        "Solicite e acompanhe seus pedidos de reembolso com rapidez e praticidade.",
      redirect: { href: "/Beneficiario/FinanceiroDemonstrativos/Demonstrativos" },
    },
    {
      icon: <Cartao />,
      title: "Débito automático",
      description:
        "Configure o débito automático para simplificar os pagamentos da sua empresa.",
      redirect: { href: "/Beneficiario/FinanceiroDemonstrativos/DebitoAutomatico" },
    },
  ],
  prestador: [
    {
      icon: <Settings />,
      title: "Serviços",
      description:
        "Acumule pontos com treinamentos e ganhe benefícios, como seguro de vida, day off, vouchers e mais.",
      redirect: { href: "/Prestador/Servicos" },
    },
    {
      icon: <PrestadorServicos />,
      title: "Atendimento e produção",
      description:
        "Acesse guias, vídeos e manuais para aprender a usar a plataforma IRYS e entender processos como recurso de glosa e solicitações. ",
      redirect: { href: "/Prestador/AtendimentoeProducao" },
    },
    {
      icon: <SolicitacaoStatus />,
      title: "Status de solicitação",
      description:
        "Consulte solicitações de clientes por protocolo e acesse detalhes sobre consultas, exames e atendimentos.",
      redirect: { href: "/Prestador/Status-solicitacao" },
    },
    {
      icon: <FinanceiroDemonstrativo />,
      title: "Financeiro e demonstrativos",
      description:
        "Acesse aqui todos os formulários para solicitações médicas e encaminhamentos de pacientes.",
      redirect: { href: "/Prestador/Financeiro" },
    },
    {
      icon: <NewDoc />,
      title: "Documentação",
      description:
        "Manuais em vídeo, PDF e Excel com instruções para funções no Iris, puericultura, biometria e mais.",
      redirect: { href: "/Prestador/Documentos" },
    },
    {
      icon: <Calendario />,
      title: "Calendário",
      description:
        "Manuais em vídeo, PDF e Excel com instruções para funções no Iris, puericultura, biometria e mais.",
      redirect: { href: "/Prestador/Calendario" },
    },
    {
      icon: <NotificationBell />,
      title: "Comunicados",
      description:
        "Manuais em vídeo, PDF e Excel com instruções para funções no Iris, puericultura, biometria e mais.",
      redirect: { href: "/Prestador/Comunicados" },
    },
    {
      icon: <Planos />,
      title: "Planos atendidos",
      description:
        "Manuais em vídeo, PDF e Excel com instruções para funções no Iris, puericultura, biometria e mais.",
      redirect: { href: "/Prestador/ComunicadosPage" },
    },
    {
      icon: <TissIcon />,
      title: "Padrão TISS",
      description:
        "Manuais em vídeo, PDF e Excel com instruções para funções no Iris, puericultura, biometria e mais.",
      redirect: { href: "/Prestador/TISS" },
    },
  ],
  servicos: [
    {
      icon: <GLPI />,
      title: "GLPI",
      description:
        "Gestão de chamados e ativos de TI. Permite controle de suporte técnico, inventário de hardware/software e monitoramento de serviços.",
      // redirect: { href: "/Prestador/Servicos" },
    },
    {
      icon: <Irys />,
      title: "IRYS",
      description:
        "Gestão de relacionamento com prestadores e autorização de procedimentos médicos. ",
      // redirect: { href: "/Prestador/AtendimentoseLaudos" },
    },
    {
      icon: <Calendar />,
      title: "Portal Transparência",
      description:
        "Consulta de dados institucionais e financeiros da Unimed, garantindo conformidade com normas de transparência.",
      // redirect: { href: "/Prestador/Status-solicitacao" },
    },
    // {
    //   icon: <SLine />,
    //   title: "SLine",
    //   description:
    //     "Gerenciamento de processos administrativos e operacionais, incluindo auditoria médica, faturamento e autorizações.",
    //   // redirect: { href: "/Prestador/Demonstrativos" },
    // },
  ],
  atendimentoeProducao: [
    {
      icon: <SolicitacaoStatus />,
      title: "Produção Médica",
      description:
        "Monitore sua receita em tempo real e acompanhe os resultados do seu trabalho no mês.",
      redirect: { href: "/Prestador/ProducaoMedica" },
    },
    // {
    //   icon: <PrestadorServicos />,
    //   title: "Atendimentos e Laudos",
    //   description:
    //     "Baixe rapidamente os laudos médicos disponíveis e acesse seus exames e resultados de forma prática pelo portal.",
    //   redirect: { href: "/Prestador/AtendimentoseLaudos" },
    // },
    {
      icon: <Settings />,
      title: "Inclusão de Serviço",
      description:
        "Gestão de relacionamento com prestadores e autorização de procedimentos médicos. ",
      redirect: { href: "/Prestador/InclusaoServico" },
    },
  ],
  financeiro: [
    {
      icon: <ReceitaIcon />,
      title: "Informe de Imposto de Renda",
      description:
        "Acesse e baixe seu informe de rendimentos para a declaração do Imposto de Renda.",
      redirect: { href: "/Cooperado/IR" },
    },
    {
      icon: <Grafico />,
      title: "Demonstrativos",
      description:
        "Acesse demonstrativos financeiros e de coparticipação de sua empresa.",
      redirect: { href: "/Prestador/Demonstrativos" },
    },
    // {
    //   icon: <Cartao />,
    //   title: "Débito automático",
    //   description:
    //     "Configure o débito automático para simplificar os pagamentos da sua empresa.",
    //   redirect: { href: "/Empresa/DebitoAutomatico" },
    // },
  ],
  documentacoes: [
    {
      icon: <Documents />,
      title: "Documentos",
      description:
        "Acesse e baixe seus documentos importantes sempre que precisar.",
      redirect: { href: "/Cooperado/Documentos" },
    },
    {
      icon: <Grafico />,
      title: "Planos atendidos",
      description: "Consulte os planos disponíveis e suas coberturas.",
      redirect: { href: "/Prestador/PlanosAtendidos" },
    },
  ],
  comunicados: [
    {
      icon: <Documents />,
      title: "Comunicados",
      description:
        "Acesse e baixe seu informe de rendimentos para a declaração do Imposto de Renda.",
      redirect: { href: "/Cooperado/Comunicado" },
    },
    {
      icon: <TissIcon />,
      title: "TISS",
      description:
        "Acesse demonstrativos financeiros e de coparticipação de sua empresa.",
      // redirect: { href: "/Prestador/TISS" },
    },
    {
      icon: <Calendario />,
      title: "Calendário de fechamento",
      description:
        "Configure o débito automático para simplificar os pagamentos da sua empresa.",
      redirect: { href: "/Prestador/CalendarioMovimentacao" },
    },
  ],
};

export const userInfo = {
  name: "CSC",
  email: "csc@outlook.com",
  photoUrl: "/user-photo.png",
};

export const userPoints = {
  secretariado: [
    {
      userPontuacao: "40",
    },
  ],
  cooperado: [
    {
      userPontuacao: "20",
    },
  ],
  pessoaFisica: [
    {
      userPontuacao: "15",
    },
  ],
  empresa: [
    {
      userPontuacao: "17",
    },
  ],
  prestador: [
    {
      userPontuacao: "22",
    },
  ],
};

export const pointsList = {
  secretariado: [
    {
      name: "Webinar: Privacidade de proteção de dados",
      date: "01/01/2024",
      points: "10",
    },
    {
      name: "Workshop: Segurança de Aplicações",
      date: "15/01/2024",
      points: "10",
    },
    {
      name: "Seminário: LGPD na prática",
      date: "28/01/2024",
      points: "20",
    },
  ],
  cooperado: [
    {
      name: "Webinar: Privacidade de proteção de dados",
      date: "01/01/2024",
      points: "5",
    },
    {
      name: "Workshop: Segurança de Aplicações",
      date: "15/01/2024",
      points: "10",
    },
    {
      name: "Seminário: LGPD na prática",
      date: "28/01/2024",
      points: "5",
    },
  ],
  pessoaFisica: [
    {
      name: "Webinar: Privacidade de proteção de dados",
      date: "01/01/2024",
      points: "3",
    },
    {
      name: "Workshop: Segurança de Aplicações",
      date: "15/01/2024",
      points: "5",
    },
    {
      name: "Seminário: LGPD na prática",
      date: "28/01/2024",
      points: "2",
    },
  ],
  empresa: [
    {
      name: "Webinar: Privacidade de proteção de dados",
      date: "01/01/2024",
      points: "3",
    },
    {
      name: "Workshop: Segurança de Aplicações",
      date: "15/01/2024",
      points: "5",
    },
    {
      name: "Seminário: LGPD na prática",
      date: "28/01/2024",
      points: "2",
    },
  ],
  prestador: [
    {
      name: "Webinar: Privacidade de proteção de dados",
      date: "01/01/2024",
      points: "3",
    },
    {
      name: "Workshop: Segurança de Aplicações",
      date: "15/01/2024",
      points: "5",
    },
    {
      name: "Seminário: LGPD na prática",
      date: "28/01/2024",
      points: "2",
    },
  ],
};

export const levels = [
  {
    range: "75+",
    level: "Nível Diamante",
    benefits: [
      "Seguro de vida",
      "Desconto na avaliação de CRM",
      "Voucher de resistência de R$ 400",
      "Day off pago",
      "R$ 300 de subsídio para especialização",
      "Reembolso de 50% na mensalidade do UpCursos",
    ],
  },
  {
    range: [50, 74],
    level: "Nível Ouro",
    benefits: [
      "Seguro de vida",
      "Desconto na avaliação de CRM",
      "Voucher de resistência de R$ 300",
      "R$ 200 de subsídio no plano de saúde",
      "R$ 200 de subsídio para especialização",
      "Reembolso de 50% na mensalidade do UpCursos",
    ],
  },
  {
    range: [25, 49],
    level: "Nível Prata",
    benefits: [
      "Seguro de vida",
      "Desconto na avaliação de CRM",
      "Voucher de resistência de R$ 200",
      "R$ 100 de subsídio no plano de saúde",
      "R$ 100 de subsídio para especialização",
      "Reembolso de 50% na mensalidade do UpCursos",
    ],
  },
  {
    range: [0, 24],
    level: "Nível Bronze",
    isCurrentLevel: true,
    benefits: ["Seguro de vida"],
  },
];

export const headers = [
  "Código",
  "Tipo de Serviço",
  "Qtde Solc.",
  "Qtde Aut.",
  "Status",
  "Grau",
  "Número Solicitação",
  "Data Solicitação",
  "Data Liberação",
  "Validade Guia",
  "Canal",
];

export const data = [
  [
    "1056122",
    "Consulta em horário normal (ou prestadores)",
    "1",
    "1",
    "Autorizado",
    "Principal",
    "1136572789",
    "06/12/2024",
    "04/12/2024",
    "04/01/2025",
    "Web Service TISS",
  ],
];

export const solicitacaoInfo = {
  beneficiario: {
    codigo: "20549103844",
    nome: "Amanda Lopes Santos",
    solicitante: "Roberto Guerra Lage",
  },
  executante: {
    codigoSolicitante: "273490",
    nome: "Roberto Guerra Lage",
    dataRelatorio: "04/12/2024",
  },
};

export const formPdf = [
  {
    photoUrl: "/pdf-image.png",
    name: "Gastronomia",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2020/02/FOR%20NAP%20057%20-%20FORMULARIO%20DE%20GASTROSTOMIA.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "Cirurgia ortopédica (demais áreas)",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2020/02/FOR%20NAP%20060%20-%20FORMULARIO%20PARA%20CIRURGIA%20ORTOPEDICA.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "Cirurgia ortopédica (coluna)",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2020/02/FOR%20NAP%20059%20-%20FORMULARIO%20PARA%20COLUNA.pdf",
    },
  },
];

export const manuaisZip = [
  {
    photoUrl: "/zip-image.png",
    name: "Guia_recurso.zip",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/tabelas-cooperado/guia_recurso.zip",
    },
    icon: <Download />,
  },
];

export const manuaisPdf = [
  {
    photoUrl: "/pdf-image.png",
    name: "IRIS- Solicitação",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/IRIS-Solicitacao.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "IRIS- Solicitação/Execução",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/IRIS-Solicitacao-Execucao.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "IRIS- Execução",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/IRIS-Execucao.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "IRIS- Anexos",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/IRIS-Anexos.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "IRIS- Puericultura",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/Manual_Puericultura.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "IRIS- Biometria",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/Manual_Biometria.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "Pacote instalação biometria",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/ApisNovoPortal/arquivos/Credenciado/Drive_e_Servico_Biometria.7z",
    },
  },
];

export const manuaisPdfCooperado = [
  {
    photoUrl: "/pdf-image.png",
    name: "AGO 03/2025",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/minhas-informacoes-cooperado/ata-ago-age/",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "AGO 02/2025",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/minhas-informacoes-cooperado/ata-ago-age/",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "AGO 01/2025",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/minhas-informacoes-cooperado/ata-ago-age/",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "NEAD",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2020/02/NEAD.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "GASTRONOMIA",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2020/02/FOR%20NAP%20057%20-%20FORMULARIO%20DE%20GASTROSTOMIA.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "CIRURGIA ORTOPEDICA (DEMAIS ÁREAS)",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2020/02/FOR%20NAP%20060%20-%20FORMULARIO%20PARA%20CIRURGIA%20ORTOPEDICA.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "CIRURGIA ORTOPEDICA (COLUNA)",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2020/02/FOR%20NAP%20059%20-%20FORMULARIO%20PARA%20COLUNA.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "MANUAL DE CONSULTAS DAS NORMAS DE AUDITORIA MÉDICA E DE ENFERMAGEM",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2023/06/VERSAO-10.-MANUAL-DE-CONSULTAS-DAS-NORMAS-DE-AUDITORIA-MEDICA-E-DE-ENFERMAGEM-V.10-4.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "ABERTURA DE CHAMADOS",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/gerais/Tutorial_GLPI.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "ARQUIVAMENTO DE PRONTUÁRIOS",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/gerais/Manual%20_Orientacao_Arquivamento_Prontuarios.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "CODIGOS DE FISIOTERAPIA",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/gerais/Manual_Consulta_Normas_Fisioterapia.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "MANUAL DE INTERCÂMBIO NACIONAL 2021",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/ApisNovoPortal/arquivos/Credenciado/Drive_e_Servico_Biometria.7z",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "MANUAL DE NORMAS DE FISIOTERAPIA",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/ApisNovoPortal/arquivos/Credenciado/Drive_e_Servico_Biometria.7z",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "MANUAL DO PROCESSO ADMINISTRATIVO DISCIPLINAR",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/gerais/Manual%20do%20Processo%20Administrativo%20Disciplinar%20-%20PAD.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "MANUAL PROFILAXIA ATB",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/gerais/Manual_Profilaxia_ATB.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "NORMAS DE AUTORIZAÇÃO E AUDITORIA",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/gerais/Manual_de_Normas_de_Autorizacao_e_Auditoria_Versao_III-Alterado-23-08.pdf",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "RN 452",
    redirect: {
      href: "https://www.in.gov.br/web/dou/-/resolucao-normativa-rn-n-452-de-9-de-marco-de-2020-249619028",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "RN 395",
    redirect: {
      href: "https://www.ans.gov.br/component/legislacao/?view=legislacao&task=TextoLei&format=raw&id=MzE2OA==%3E",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "RN 259",
    redirect: {
      href: "https://www.ans.gov.br/component/legislacao/?view=legislacao&task=TextoLei&format=raw&id=MTc1OA==%3E",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "SOLICITAÇÃO DE ANTI-ANGIOGÊNICO",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/gerais/formulariosSolicitacaoAntiangiogenico.zip",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "ROL - Lista Referencial 02/2025",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/tabelas/tabela_rol_procedimentos_medicos_20250403190449.zip",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "TNUMM - TABELA DE MEDICAMENTOS E MATERIAIS - VERSÃO LXXVIII - VIGÊNCIA 01-03-2025",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/tabelas/tabela_tnumm_prestadores_20250430160422.zip",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "Tabela de Procedimentos Excludentes",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/tabelas/TB%20042_Procedimentos%20Excludentes_vers%C3%A3o%202022.01.xlsx",
    },
  },
  {
    photoUrl: "/pdf-image.png",
    name: "Tabela Grau de Participação",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/tabelas/GraudeParticipacaoPermitido.xlsx",
    },
  },
];

export const videosIrys = [
  {
    photoUrl: "../../../public/assets/videos/Introducao.mp4",
    name: "Introdução a plataforma Irys",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/IRIS-Solicitacao.pdf",
    },
  },
  {
    photoUrl: "../../../public/assets/videos/Introducao.mp4",
    name: "Introdução a plataforma Irys",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/IRIS-Solicitacao.pdf",
    },
  },
  {
    photoUrl: "../../../public/assets/videos/Introducao.mp4",
    name: "Introdução a plataforma Irys",
    redirect: {
      href: "https://www.unimeduberlandia.coop.br/portal/wp-content/themes/wp-bootstrap-starter-child/pdf/manuais-prestador/IRIS-Solicitacao.pdf",
    },
  },
];

export const videoEscolhido = [
  {
    id: 1,
    title: "Introdução à plataforma Irys",
    description: "Descrição",
    videoUrl: "/assets/videos/Introducao.mp4",
    thumbnailUrl: "/video-thumbnail.png",
    duration: "12:31",
  },
  {
    id: 2,
    title: "Criar favoritos na plataforma Irys",
    description: "Descrição",
    videoUrl: "/assets/videos/favoritos.mp4",
    thumbnailUrl: "/video-thumbnail.png",
    duration: "12:31",
  },
  {
    id: 3,
    title: "Informações Úteis plataforma Irys",
    description: "Descrição",
    videoUrl: "/assets/videos/Introducao.mp4",
    thumbnailUrl: "/video-thumbnail.png",
    duration: "12:31",
  },
  {
    id: 4,
    title: "Cancelamentos na plataforma Irys",
    description: "Descrição",
    videoUrl: "/assets/videos/favoritos.mp4",
    thumbnailUrl: "/video-thumbnail.png",
    duration: "12:31",
  },
  {
    id: 5,
    title: "Consulta na plataforma Irys",
    description: "Descrição",
    videoUrl: "/assets/videos/Introducao.mp4",
    thumbnailUrl: "/video-thumbnail.png",
    duration: "12:31",
  },
];

export const videosPortalConhecimento = [
  {
    id: 1,
    title: "Introdução à plataforma Irys",
    description: "Descrição",
    videoUrl: "/assets/videos/Introducao.mp4",
    thumbnailUrl: "/video-thumbnail.png",
    duration: "12:31",
  },
  {
    id: 2,
    title: "Criar favoritos na plataforma Irys",
    description: "Descrição",
    videoUrl: "/assets/videos/Favoritos.mp4",
    thumbnailUrl: "/video-thumbnail.png",
    duration: "12:31",
  },
  {
    id: 3,
    title: "Informações Úteis plataforma Irys",
    description: "Descrição",
    videoUrl: "/assets/videos/Introducao.mp4",
    thumbnailUrl: "/video-thumbnail.png",
    duration: "12:31",
  },
  {
    id: 4,
    title: "Cancelamentos na plataforma Irys",
    description: "Descrição",
    videoUrl: "/assets/videos/Favoritos.mp4",
    thumbnailUrl: "/video-thumbnail.png",
    duration: "12:31",
  },
  {
    id: 5,
    title: "Consulta na plataforma Irys",
    description: "Descrição",
    videoUrl: "/assets/videos/Introducao.mp4",
    thumbnailUrl: "/video-thumbnail.png",
    duration: "12:31",
  },
];

export const comunicado = [
  {
    id: 1,
    title: "Atualização Importante: Novidades no Portal do Cooperado",
    description: "Descrição usada no corpo do comunicado para o secretariado",
    timestamp: "4 minutos atrás",
    content: `
      Prezado Cooperado,

      Estamos sempre trabalhando para melhorar a experiência e oferecer mais eficiência na sua rotina. Recentemente, realizamos atualizações no portal para incluir novas funcionalidades:

      • [Funcionalidade 1]: Descrição breve.
      • [Funcionalidade 2]: Descrição breve.
      • [Funcionalidade 3]: Descrição breve.

      Essas mudanças visam facilitar seu acesso a informações e serviços, garantindo maior praticidade no dia a dia.
      Para acessar as novidades, basta acessar a seção [nome da seção] no menu principal ou clique no botão abaixo.
      
    `,

    image: "/hackathon.png",
  },

  {
    id: 2,
    title: "Título Comunicado",
    description: "Descrição usada no corpo do comunicado para o secretariado",
    timestamp: "4 minutos atrás",
    content: "Conteúdo detalhado do comunicado 2.",
    image: null,
  },
  {
    id: 3,
    title: "Título Comunicado",
    description: "Descrição usada no corpo do comunicado para o secretariado",
    timestamp: "Ontem",
    content: "Conteúdo detalhado do comunicado 3.",
    image: null,
  },
];

type DataFaturamento = {
  [key: string]: {
    faturamentoLiquido: string;
    creditos: { label: string; value: string }[];
    debitos: { label: string; value: string }[];
  };
};

export const dataFaturamento = {
  Maio: {
    faturamentoLiquido: "R$ 4.438,24",
    creditos: [
      { label: "Consultas", value: "47" },
      { label: "Produção médica", value: "R$ 7.851,03" },
      { label: "Remuneração variável", value: "R$ 716,22" },
    ],
    debitos: [
      { label: "Pagamentos indevidos", value: "R$ 1.540,05" },
      { label: "Outras movimentações", value: "R$ 1.540,05" },
      { label: "Imposto de Renda", value: "R$ 1.031,76" },
      { label: "INSS", value: "R$ 1.557,20" },
    ],
  },
  Março: {
    faturamentoLiquido: "R$ 3.800,00",
    creditos: [
      { label: "Consultas", value: "30" },
      { label: "Produção médica", value: "R$ 6.500,00" },
      { label: "Remuneração variável", value: "R$ 600,00" },
    ],
    debitos: [
      { label: "Pagamentos indevidos", value: "R$ 1.200,00" },
      { label: "Outras movimentações", value: "R$ 1.100,00" },
      { label: "Imposto de Renda", value: "R$ 900,00" },
      { label: "INSS", value: "R$ 1.300,00" },
    ],
  },
  Fevereiro: {
    faturamentoLiquido: "R$ 5.300,00",
    creditos: [
      { label: "Consultas", value: "30" },
      { label: "Produção médica", value: "R$ 5.100,00" },
      { label: "Remuneração variável", value: "R$ 600,00" },
    ],
    debitos: [
      { label: "Pagamentos indevidos", value: "R$ 1.100,00" },
      { label: "Outras movimentações", value: "R$ 900,00" },
      { label: "Imposto de Renda", value: "R$ 900,00" },
      { label: "INSS", value: "R$ 1.300,00" },
    ],
  },
  Janeiro: {
    faturamentoLiquido: "R$ 6.150,00",
    creditos: [
      { label: "Consultas", value: "30" },
      { label: "Produção médica", value: "R$ 3.550,00" },
      { label: "Remuneração variável", value: "R$ 600,00" },
    ],
    debitos: [
      { label: "Pagamentos indevidos", value: "R$ 1.000,00" },
      { label: "Outras movimentações", value: "R$ 800,00" },
      { label: "Imposto de Renda", value: "R$ 720,00" },
      { label: "INSS", value: "R$ 1.220,00" },
    ],
  },
  Dezembro: {
    faturamentoLiquido: "R$ 2.600,00",
    creditos: [
      { label: "Consultas", value: "30" },
      { label: "Produção médica", value: "R$ 3.400,00" },
      { label: "Remuneração variável", value: "R$ 200,00" },
    ],
    debitos: [
      { label: "Pagamentos indevidos", value: "R$ 600,00" },
      { label: "Outras movimentações", value: "R$ 1.100,00" },
      { label: "Imposto de Renda", value: "R$ 500,00" },
      { label: "INSS", value: "R$ 840,00" },
    ],
  },
};

export const chartData = [
  { month: "Nov", height: "h-36" },
  { month: "Dez", height: "h-20" },
  { month: "Jan", height: "h-24" },
  { month: "Fev", height: "h-20" },
  { month: "Abr", height: "h-20" },
  { month: "Mai", height: "h-32" },
];

export const eventsDate = [
  {
    date: "2025-01-22",
    description:
      "Faturamento de Consultas/SADTs (executados online)  |  Unimed Uberlândia e Intercâmbio",
    color: "border-l-verde-claro",
    backgroundColor: "verde",
  },
  {
    date: "2025-01-08",
    description: "Disponibilização do Espelho de Produção",
    color: "border-l-orange-unimed",
    backgroundColor: "laranja",
  },
  {
    date: "2025-01-20",
    description: "Pagamentos de Produção",
    color: "border-l-verde-unimed",
    backgroundColor: "verdescuro",
  },
  {
    date: "2025-02-18",
    description:
      "Faturamento de Consultas/SADTs (executados online)  |  Unimed Uberlândia e Intercâmbio",
    color: "border-l-verde-claro",
    backgroundColor: "verde",
  },
  {
    date: "2025-02-10",
    description: "Disponibilização do Espelho de Produção",
    color: "border-l-orange-unimed",
    backgroundColor: "laranja",
  },
  {
    date: "2025-02-14",
    description: "Pagamentos de Produção",
    color: "border-l-verde-unimed",
    backgroundColor: "verdescuro",
  },
];

export const pagamentos = [
  {
    status: "Em aberto",
    items: [
      {
        label: "Em aberto",
        valor: "R$ 341,25",
        data: "01/01/2025",
        multa: null,
        color: "text-orange-500",
        dotColor: "text-orange-500",
      },
      {
        label: "Negado",
        valor: "R$ 482,80",
        data: "01/12/2024",
        multa: "16,90 de multa por atraso",
        color: "text-red-500",
        dotColor: "text-orange-500",
      },
    ],
  },
  {
    status: "Pagos",
    items: [
      {
        label: "Pago",
        valor: "R$ 341,25",
        data: "01/01/2024",
        multa: null,
        color: "text-green-500",
        dotColor: "text-green-500",
      },
      {
        label: "Pago",
        valor: "R$ 341,25",
        data: "01/01/2024",
        multa: null,
        color: "text-green-500",
        dotColor: "text-green-500",
      },
    ],
  },
];

export type PaymentDetails = {
  valorTotal: string;
  vencimento: string;
  valor: string;
  multa: string;
  diasAtraso: string;
  valorMulta: string;
};

export type PaymentCategory = {
  PIX: PaymentDetails[];
  Boleto: PaymentDetails[];
};

const detalhesPagamentos: PaymentCategory = {
  PIX: [
    {
      valorTotal: "R$ 482,80",
      vencimento: "13/03/2024",
      valor: "R$ 341,25",
      multa: "16,90",
      diasAtraso: "50",
      valorMulta: "R$ 141,55",
    },
  ],
  Boleto: [
    {
      valorTotal: "R$ 480,20",
      vencimento: "24/11/2024",
      valor: "R$ 343,25",
      multa: "56,90",
      diasAtraso: "120",
      valorMulta: "R$ 141,55",
    },
  ],
};

export default detalhesPagamentos;

interface BolNegociar {
  id: number;
  status: string;
  documento: string;
  vencimento: string;
  valor: number;
}

export const bolNegociar = [
  {
    id: 1,
    status: "Em aberto",
    documento: "1110242432",
    vencimento: "13/03/2025",
    valor: 412.05,
  },
  {
    id: 2,
    status: "Em atraso",
    documento: "1110242432",
    vencimento: "13/02/2025",
    valor: 412.05,
  },
  {
    id: 3,
    status: "Em atraso",
    documento: "1110242432",
    vencimento: "13/01/2025",
    valor: 412.05,
  },
];

export const banks = {
  Nubank: {
    bins: [
      "5162",
      "2305",
      "2307",
      "2308",
      "5122",
      "5159",
      "5162",
      "5163",
      "5200",
      "5226",
      "5234",
      "5248",
      "5253",
      "5502",
      "5548",
    ],
    color: "#8A05BE",
  },
  Inter: {
    bins: [
      "2229",
      "2306",
      "2309",
      "2500",
      "5117",
      "5125",
      "5126",
      "5331",
      "5334",
      "5343",
      "5361",
      "5362",
      "5364",
      "5369",
      "5497",
      "5554",
      "5555",
      "5558",
    ],
    color: "#FF7A00",
  },
  C6: {
    bins: [
      "5425",
      "2229",
      "2232",
      "2307",
      "2309",
      "2717",
      "5108",
      "5114",
      "5120",
      "5148",
      "5327",
      "5346",
      "5371",
      "5381",
      "5474",
      "5524",
      "5547",
      "5552",
      "5554",
      "5555",
      "5565",
    ],
    color: "#121212",
  },
  BTG: {
    bins: [
      "2230",
      "2231",
      "2234",
      "2340",
      "5113",
      "5116",
      "5147",
      "5214",
      "5230",
      "5277",
      "5309",
      "5390",
      "5393",
      "5449",
      "5462",
      "5504",
      "5533",
      "5534",
      "5593",
      "5595",
    ],
    color: "#002244",
  },
  MercadoPago: {
    bins: ["4174", "4519", "4667", "4921", "4985"],
    color: "#009EE3",
  },
  PagBank: {
    bins: ["2233", "2235", "2320", "2330", "5264", "5322", "5337", "5496"],
    color: "#007F00",
  },
  BancoPan: {
    bins: [
      "4068",
      "4078",
      "4142",
      "4203",
      "4222",
      "4346",
      "4497",
      "4698",
      "4741",
      "4745",
      "4830",
      "4894",
      "4901",
      "4912",
      "4934",
      "5425",
      "5522",
    ],
    color: "#FF5733",
  },
  BV: { bins: ["4258", "4824"], color: "#B71C1C" },
  PicPay: {
    bins: [
      "2227",
      "2230",
      "2231",
      "2340",
      "5267",
      "5284",
      "5313",
      "5345",
      "5371",
    ],
    color: "#1B5E20",
  },
  Neon: {
    bins: [
      "4040",
      "4129",
      "4230",
      "4586",
      "4662",
      "4670",
      "4800",
      "4856",
      "4984",
    ],
    color: "#FF7A00",
  },
  Caixa: {
    bins: [
      "4007",
      "4009",
      "4013",
      "4048",
      "4058",
      "4084",
      "4091",
      "4159",
      "4179",
      "4195",
      "4197",
      "4219",
      "4224",
      "4260",
      "4330",
      "4344",
      "4392",
      "4514",
      "4593",
      "4611",
      "4620",
      "4657",
      "4698",
      "4745",
      "4793",
      "4800",
      "4894",
      "5067",
      "5090",
      "5091",
      "5104",
      "5105",
      "5126",
      "5151",
      "5154",
      "5157",
      "5166",
      "5173",
      "5187",
      "5217",
      "5223",
      "5224",
      "5235",
      "5243",
      "5252",
      "5257",
      "5261",
      "5269",
      "5271",
      "5273",
      "5277",
      "5282",
      "5283",
      "5290",
      "5291",
      "5292",
      "5293",
      "5294",
      "5295",
      "5296",
      "5297",
      "5298",
      "5302",
      "5328",
      "5329",
      "5350",
      "5350",
      "5358",
      "5359",
      "5361",
      "5362",
      "5390",
      "5405",
      "5430",
      "5448",
      "5458",
      "5467",
      "5477",
      "5488",
      "5493",
      "5526",
      "5527",
      "5529",
      "5530",
      "5536",
      "5545",
      "5549",
      "5577",
      "5587",
      "5590",
      "5993",
      "6277",
      "6500",
      "6505",
      "6509",
      "6516",
      "6550",
      "5493",
    ],
    color: "#004080",
  },
  Itau: {
    bins: [
      "2330",
      "7906",
      "2660",
      "3747",
      "4004",
      "4005",
      "4005",
      "4058",
      "4066",
      "4066",
      "4076",
      "4081",
      "4084",
      "4096",
      "4096",
      "4096",
      "4103",
      "4104",
      "4107",
      "4118",
      "4158",
      "4159",
      "4167",
      "4172",
      "4174",
      "4180",
      "4195",
      "4198",
      "4203",
      "4208",
    ],
    color: "#003B59",
  },
  Santander: {
    bins: [
      "4093",
      "4157",
      "4254",
      "4350",
      "4410",
      "4512",
      "4551",
      "4604",
      "4633",
      "4793",
      "4894",
      "4913",
      "4915",
      "4924",
      "5265",
      "5423",
      "5426",
      "5455",
      "5458",
      "5560",
    ],
    color: "#E60012",
  },
  WillBank: {
    bins: [
      "2228",
      "2229",
      "2231",
      "2234",
      "2235",
      "2330",
      "2340",
      "5105",
      "5183",
      "5298",
      "5344",
      "5350",
      "5361",
      "5389",
      "5424",
      "5431",
      "5469",
      "5471",
      "5499",
      "5570",
      "5595",
      "5597",
      "5598",
    ],
    color: "#FF4500",
  },
  BMG: { bins: ["5135", "5163", "5259", "5262", "5274"], color: "#CC0020" },
  Sicoob: {
    bins: ["4221", "4446", "4469", "4473", "4573", "4660", "4794"],
    color: "#005B47",
  },
  PortoSeguro: {
    bins: [
      "4152",
      "4121",
      "4195",
      "4463",
      "4466",
      "4662",
      "4692",
      "4806",
      "4846",
      "4960",
      "4195",
      "5124",
      "5198",
      "5315",
      "5363",
      "5365",
      "5417",
      "5536",
    ],
    color: "#424371",
  },
  AmericanExpress: {
    bins: [
      "3786",
      "3438",
      "3764",
      "3765",
      "3766",
      "3786",
      "3724",
      "3454",
      "3441",
      "3724",
      "3450",
      "3724",
      "3417",
      "3401",
    ],
    color: "#3D3D3D",
  },
};

export const demonstrativos = [
  {
    title: "Demonstrativo de cobrança",
    description:
      "Resumo detalhado dos valores cobrados, incluindo serviços utilizados e vencimentos.",
    redirect: { href: "Demonstrativos/DemonstrativoCobranca" },
  },
  {
    title: "Demonstrativo de mensalidade",
    description:
      "Registro do valor da mensalidade do plano, com descrição de encargos e pagamentos.",
    redirect: { href: "Demonstrativos/DemonstrativoMensalidade" },
  },
  {
    title: "Demonstrativo de recomposição",
    description:
      "Informações sobre ajustes financeiros, como reajustes e regularizações de cobranças.",
    redirect: { href: "Demonstrativos/DemonstrativoRecomposicao" },
  },
];

export const demonstrativosCooperados = [
  {
    title: "Extrato",
    description:
      "Acompanhe lançamentos, glosas e valores pagos com filtros por período. Visualização simples, segura e detalhada.",
    redirect: { href: "Demonstrativos/Extrato" },
  },
  {
    title: "Demonstrativo de cobrança",
    description:
      "Resumo detalhado dos valores cobrados, incluindo serviços utilizados e vencimentos.",
    redirect: { href: "Demonstrativos/DemonstrativoCobranca" },
  },
  {
    title: "Demonstrativo de mensalidade",
    description:
      "Registro do valor da mensalidade do plano, com descrição de encargos e pagamentos.",
    redirect: { href: "Demonstrativos/DemonstrativoMensalidade" },
  },
  {
    title: "Demonstrativo de recomposição",
    description:
      "Informações sobre ajustes financeiros, como reajustes e regularizações de cobranças.",
    redirect: { href: "Demonstrativos/DemonstrativoRecomposicao" },
  },
  {
    title: "Distribuição de sobras",
    description:
      "Confira de forma clara os valores da sua distribuição de sobras, com detalhes por período e fácil acesso ao histórico.",
    redirect: { href: "Demonstrativos/DistribuicaoSobras" },
  },
];

export const demonstrativosEmpresa = [
  {
    title: "Demonstrativo de mensalidade",
    description:
      "Visualize e faça download do PDF detalhado com os valores da sua mensalidade e cobranças associadas.",
    redirect: { href: "Demonstrativos/DemonstrativoMensalidade" },
  },
  {
    title: "Demonstrativo de Custo Operacional",
    description:
      "Obtenha um relatório detalhado com os custos operacionais relacionados ao seu contrato.",
    redirect: {
      href: "/Empresa/FinanceiroDemonstrativos/Demonstrativos/DemonstrativoCustoOperacional",
    },
  },
  {
    title: "Demonstrativo de Coparticipação",
    description:
      "Obtenha um relatório detalhado com os custos operacionais relacionados ao seu contrato.",
    redirect: {
      href: "/Empresa/FinanceiroDemonstrativos/Demonstrativos/DemonstrativoCoparticipacao",
    },
  },
  {
    title: "Demonstrativo de Recomposição PJ",
    description:
      "Acompanhe os ajustes financeiros realizados em contratos PJ por meio do demonstrativo atualizado",
    redirect: {
      href: "/Empresa/FinanceiroDemonstrativos/Demonstrativos/DemonstrativoRecomposicao",
    },
  },
  {
    title: "Demonstrativo de Faturamento anual",
    description: "Acesse o demonstrativo do faturamento anual da sua empresa.",
    redirect: {
      href: "/Empresa/FinanceiroDemonstrativos/Demonstrativos/DemonstrativoFaturamentoAnual",
    },
  },
];

export interface DocumentFile {
  name: string;
  link: string;
}

export interface DocumentSection {
  category: string;
  files: DocumentFile[];
}

export const documents: DocumentSection[] = [
  {
    category: "Manuais de orientação para empresas",
    files: [
      {
        name: "Manual orientativo de movimentações cadastrais",
        link: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2023/05/material_orientativo-movimentacoes_cadastrais_via_fale_conosco_1.2.pdf",
      },
    ],
  },
  {
    category: "Formulários de inscrição de pré pagamento",
    files: [{ name: "Unimed Pleno Empresarial – Enfermaria", link: "#" }],
  },
  {
    category: "Formulários de exclusão",
    files: [
      {
        name: "Relação de documentos para cadastro de beneficiário inativo",
        link: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2023/05/FOR%20CAD%2004%20-%20Rela%C3%A7%C3%A3o%20de%20Documentos%20para%20Cadastramento%20no%20plano%20de%20Inativos.pdf",
      },
      {
        name: "Solicitação de exclusão e termo de ciência de beneficiários em plano empresarial",
        link: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2024/12/FOR-CAD-30-Exclusao-e-Termo-de-Ciencia-do-Beneficio-do-Plano-de-Saude-para-Demitidos-e-Aposentados.pdf",
      },
    ],
  },
  {
    category: "Formulário de declaração de saúde",
    files: [
      {
        name: "Declaração de saúde",
        link: "https://www.unimeduberlandia.coop.br/portal/wp-content/uploads/2024/07/FORMULARIO_PARA_DECLARACAO_DE_SAUDE-2024.pdf",
      },
    ],
  },
];

export const STATUS_OPTIONS = ["Aprovado", "Negado", "Em análise"];
export const TIPO_GUIA_OPTIONS = ["Consulta", "Exame", "Guia de SP SADT"];
export const CONTRATO_OPTIONS = ["Contrato 1", "Contrato 2", "Contrato 3"];

export interface TabelaDados {
  tipoGuia: string;
  numAutorizacao: string;
  codigoCartao: string;
  nomeBeneficiario: string;
  dataInicial: string;
  dataFinal?: string;
  solicitante: string;
  status: string;
  motivo: string;
  contrato?: string;
}

export const TABELA_DADOS: TabelaDados[] = [
  {
    tipoGuia: "Guia de SP SADT",
    numAutorizacao: "110872294",
    codigoCartao: "00324516486460009",
    nomeBeneficiario: "LETICIA APARECIDA PEREIRA RAMOS",
    dataInicial: "24/03/2024",
    dataFinal: "30/03/2024",
    solicitante: "MARCELA BRASIL PEREIRA",
    status: "Negado",
    motivo: "Plano do beneficiário não se encontra ativo.",
    contrato: "Contrato 1",
  },
  {
    tipoGuia: "Guia de SP SADT",
    numAutorizacao: "208027492",
    codigoCartao: "00324516486460009",
    nomeBeneficiario: "AMANDA VIEIRA BRITO",
    dataInicial: "29/04/2024",
    solicitante: "LAURA SANTOS MARTINS",
    status: "Aprovado",
    motivo: "N/A",
    contrato: "Contrato 2",
  },
];

export const testeDadosContrato = {
  resultado: [
    {
      nomeFantasia: "UNIMED UBERLANDIA COOP REG TRAB MEDICO LTDA",
      cnpj: "17.790.718/0001-21",
      fone: "(34) 3239-6909",
      contrato: "7714",
      email: "uni@teste.com",
    },
  ],
};

export const testeCnp1 = "17.790.718/0001-21";

export const laudosData = Array.from({ length: 30 }, (_, index) => ({
  data: "15/07/2024",
  guia: "1191349484",
  titulo: `Bruno Augusto Ferreira Leal ${index + 1}`,
  exames: "41001125",
}));

interface Plan {
  title: string;
  subtitle: string;
  content: string;
}

export const plans: Plan[] = [
  {
    title: "Plano Pleno ON Empresarial",
    subtitle: "a partir de #R$ 173,93/mês#",
    content: `Registro ANS Enfermaria:
    *497.676/23-2*
    Registro ANS Apartamento:
    *A97677/23-1*

    Plano Ambulatorial +
    Hospitalar com obstetrícia

    *Atendimento em Uberlândia:*
    Porta de entrada APS (Atenção Primária a Saúde).

    Após encaminhamento contará com acesso a Rede Referenciada.
    *Hospitais:*
    Mater Dei Santa Clara, UMC, Orthomed, Santa Marta.
    *Laboratórios:*
    Check-Up e Labormed.
    *Clínicas:*
    Credenciadas em Uberlândia, acesso a Rede Referenciada.
    *Cobertura:*
    Consulta de pronto socorro à nível nacional dentro das primeiras 12h.
    Consultas com o Médico de família são isentas de coparticipação
    *Opcional:*
    Serviços de transporte: UTI Aérea (Nacional) e Ambulância SOS (Local).
    **PLANO COPARTICIPATIVO*
    Consulte o Guia Médico`,
  },
  {
    title: "Plano Udiplan ON Empresarial",
    subtitle: "a partir de #R$ 214,02/mês#",
    content: `Registro ANS Enfermaria:
    *497.678/23-9*
    Registro ANS Apartamento:
    *497.679/23-7*

    Plano Ambulatorial +
    Hospitalar com obstetrícia

    *Atendimento em Uberlândia:*
    Porta de entrada APS (Atenção Primária a Saúde).

    Após encaminhamento contará com acesso a Rede Referenciada.

    *Hospitais:*
    Mater Dei Santa Clara, UMC, Orthomed, Santa Marta.

    *Laboratórios:*
    Check-Up e Labormed.

    *Clínicas:*
    Credenciadas em Uberlândia, acesso a Rede Referenciada.

    *Cobertura:*
    Consulta de pronto socorro à nível nacional dentro das primeiras 12h.

    Consultas com o Médico de família são isentas de coparticipação

    *Opcional:*
    Serviços de transporte: UTI Aérea (Nacional) e Ambulância SOS (Local).

    **PLANO COPARTICIPATIVO*
    Consulte o Guia Médico`,
  },
  {
    title: "Plano Pleno ON Empresarial",
    subtitle: "a partir de #R$ 173,93/mês#",
    content: `Registro ANS Enfermaria:
    *497.676/23-2*
    Registro ANS Apartamento:
    *A97677/23-1*

    Plano Ambulatorial +
    Hospitalar com obstetrícia

    *Atendimento em Uberlândia: *
    Porta de entrada APS
    (Atenção Primária a Saúde).

    Após encaminhamento contará com acesso a Rede
    Referenciada.
    *Hospitais:*
    Mater Dei Santa Clara, UMC, Orthomed, Santa
    Marta.
    *Laboratórios:*
    Check-Up e Labormed.
    *Clínicas:*
    Credenciadas em Uberlândia, acesso a Rede
    Referenciada.
    *Cobertura:*
    Consulta de pronto socorro à nível nacional
    dentro das primeiras 12h.
    Consultas com o Médico de família são isentas de
    coparticipação
    *Opcional:*
    Serviços de transporte: UTI Aérea (Nacional) e
    Ambulância SOS (Local).
    **PLANO COPARTICIPATIVO*
    Consulte o Guia Médico`,
  },
  {
    title: "Plano Udiplan ON Empresarial",
    subtitle: "a partir de #R$ 214,02/mês#",
    content: `Registro ANS Enfermaria:
    *497.678/23-9*
    Registro ANS Apartamento:
    *497.679/23-7*

    Plano Ambulatorial +
    Hospitalar com obstetrícia

    *Atendimento em Uberlândia:*
    Porta de entrada APS
    (Atenção Primária a Saúde).

    Após encaminhamento contará com acesso a Rede
    Referenciada.
    *Hospitais:*
    Mater Dei Santa Clara, UMC, Orthomed, Santa
    Marta.
    *Laboratórios:*
    Check-Up e Labormed.
    *Clínicas:*
    Credenciadas em Uberlândia, acesso a Rede
    Referenciada.
    *Cobertura:*
    Consulta de pronto socorro à nível nacional
    dentro das primeiras 12h.

    Consultas com o Médico de família são isentas de
    coparticipação
    *Opcional:*
    Serviços de transporte: UTI Aérea (Nacional) e
    Ambulância SOS (Local).
    **PLANO COPARTICIPATIVO*
    Consulte o Guia Médico`,
  },
];

export const dadosPessoais = {
  nome: "Bruno Leal",
  cpf: "132.751.066-11",
  nascimento: "06/06/1991",
  cns: "70204536978362",
  matricula: "2685448660",
  email: "bafelrino@uniparticipacoes.com.br",
  celular: "(34) 99999 9999",
  telefone: "(34) 3232 3232",
  endereco:
    "Rua Bernardo Cupertino 103, Osvaldo Rezende, Uberlândia-MG, CEP 38411-341",
  complemento: "Santae",
  contratante: "Somar Análises & Gestão",
};

export const dadosPlano = {
  registroANS: "384577",
  estabelecimento: "Unimed Uberlândia Coop. Regional de Trab. Med. Ltda",
  codigoPlano: "462963198",
  nomePlano: "Unimed Plano Empresarial - Apartamento",
  numeroContrato: "2685448660",
  tipoContratacao: "Plano Coletivo Empresarial",
  regulamentacao: "Regulamentado",
  dataContratacao: "01/02/2024",
  inicioCobertura: "01/02/2024",
  segmentacao: "Ambulatorial + Hospitalar com Obstetrícia",
  acomodacao: "Apartamento",
  abrangencia: "Municipal",
};

export const carencias = [
  { categoria: "Urgência e emergência", fimCarencia: "Permitido" },
  {
    categoria: "Consultas, Exames e procedimentos simples",
    fimCarencia: "23/10",
  },
  { categoria: "Exames e procedimentos complementares", fimCarencia: "23/10" },
  {
    categoria: "Consultas ou sessões multidisciplinares e endoscopias",
    fimCarencia: "23/10",
  },
  {
    categoria: "Procedimentos cirúrgicos e internações hospitalares*",
    fimCarencia: "23/10",
  },
  { categoria: "Procedimentos complexos", fimCarencia: "02/01/2025" },
  { categoria: "Exame de genética e biologia molecular", fimCarencia: "23/10" },
  { categoria: "Parto a termo", fimCarencia: "23/10" },
];

export const dadosCartaoListaMock = {
  numeroCartao: "0 125 505030000000 0",
  nomeBeneficiario: "Bruno Leal",
  acomodacao: "Individual",
  vigencia: "01/02/2020",
  plano: "Regulamentado",
  redeAtendimento: "RB05 BÁSICO",
  segmentacaoAssistencial: "AMBULATORIAL + HOSPITALAR COM OBSTETRÍCIA",
  abrangencia: "GRUPO DE MUNICÍPIOS",
  atend: "0988",
};

export const logoInfo: LogoInfo[] = [
  {
    id: "logo-info-1",
    src: AIcon,
    title: "Programa de Acreditação",
  },
  {
    id: "logo-info-2",
    src: DIcon,
    title: "Doutorado /Pós-doutorado",
  },
  {
    id: "logo-info-3",
    src: EIcon,
    title: "Título de Especialista",
  },
  {
    id: "logo-info-4",
    src: GIcon,
    title:
      "Certificações de Entidades Gestoras de Outros Programas de Qualidade",
  },
  {
    id: "logo-info-5",
    src: IIcon,
    title: "Certificação ISO 9001",
  },
  {
    id: "logo-info-6",
    src: MIcon,
    title: "Mestrado",
  },
  {
    id: "logo-info-7",
    src: NIcon,
    title: "Comunicação de eventos adversos",
  },
  {
    id: "logo-info-8",
    src: PIcon,
    title: "Pós-graduação latu senso",
  },
  {
    id: "logo-info-9",
    src: QIcon,
    title: "Qualidade monitorada",
  },
  {
    id: "logo-info-10",
    src: RIcon,
    title: "Profissional com residência",
  },
  {
    id: "logo-info-11",
    src: SIcon,
    title: "Segurança do Paciente",
  },
];

export const COMPETENCIAS = [
  "03/2025",
  "02/2025",
  "01/2025",
  "12/2024",
  "11/2024",
];

export const RESULTADOS = {
  "03/2025": [
    {
      titulo: "Fisioterapia bem viver",
      descricao: "Patologia osteomuscular em",
      codigo: "20103514",
      data: "13/03/2025",
      valor: "R$ 7,51",
    },
    {
      titulo: "Fisioterapia bem viver",
      descricao: "Patologia osteomuscular em",
      codigo: "20173114",
      data: "13/03/2025",
      valor: "R$ 7,51",
    },
  ],
  "02/2025": [
    {
      titulo: "Gastroenterologista",
      descricao: "Patologia estomacal em",
      codigo: "30153514",
      data: "25/02/2025",
      valor: "R$ 15,57",
    },
    {
      titulo: "Oftalmologista",
      descricao: "Patologia ocular em",
      codigo: "2735058",
      data: "09/02/2025",
      valor: "R$ 4,85",
    },
  ],
  "12/2024": [
    {
      titulo: "Psicologo",
      descricao: "Patologia psicologica em",
      codigo: "16389517",
      data: "17/12/2024",
      valor: "R$ 26,99",
    },
    {
      titulo: "Oftalmologista",
      descricao: "Patologia ocular em",
      codigo: "14253514",
      data: "08/12/2024",
      valor: "R$ 6,63",
    },
  ],
};

// utils/const.ts
export type Guide = {
  date: string;
  code: string;
  name: string;
  status: string;
  statusColor: string;
};

export const guides = [
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

export const REEMBOLSO_DATA = [
  {
    id: 1,
    date: "20 Março 2024",
    amount: "R$ 180,00",
    status: "Em análise",
    user: "Tatiane Caroline",
  },
];

export const demonstrativoData = [
  {
    compFinanceira: "10/2024",
    empresa: "BRUNO LEAL DESIGN LTDA",
    cnpj: "51.325.851/0001-61",
    matricula: "2924905612",
    cartao: "001428545484660009",
    valor: "R$ 178,86",
    cpf: "13275105611",
    dependente: "TITULAR",
    parentesco: "BRUNO AUGUSTO FERREIRA LEAL",
    titular: "BRUNO AUGUSTO FERREIRA LEAL",
    dataEmissao: "01/10/2024",
    codigo: "R$ 178,86",
    notaFiscal: "R$ 178,86",
    dataNascimento: "29249",
    classePedido: "5096701",
    totalBruto: "29/01/1996",
  },
];
