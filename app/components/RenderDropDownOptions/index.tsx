"use client";

import Link from "next/link";

export const renderDropdownOptions = (optionId: number) => {
  switch (optionId) {
    case 2: // Serviços
      return (
        <ul className="pl-9">
          <li className="pt-6">
            <Link
              href="https://glpi.unimeduberlandia.coop.br/login.php"
              target="_blank"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              GLPI
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="https://iris.unimeduberlandia.coop.br/iris/#/authenticate"
              target="_blank"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              IRYS
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="https://transparencia.unimeduberlandia.coop.br/portal-prestador/?_gl=1*lxkf7h*_gcl_au*MTMxOTY1MTY0NC4xNzM5Nzg5MDcz#/authenticate"
              target="_blank"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Portal Transparência
            </Link>
          </li>
          {/* <li className="pt-2">
            <Link
              href="https://www.sline.com.br/"
              target="_blank"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-base"
            >
              SLine
            </Link>
          </li> */}
        </ul>
      );
    case 3: // Atendimento e Produção
      return (
        <ul className="pl-9">
          <li className="pt-6">
            <Link
              href="/Prestador/ProducaoMedica"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Produção Médica
            </Link>
          </li>
          {/* <li className="pt-2">
            <Link
              href="/Prestador/AtendimentoseLaudos"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-base"
            >
              Atendimentos e Laudos
            </Link>
          </li> */}
          <li className="pt-9">
            <Link
              href="/Prestador/InclusaoServico"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Inclusão de serviço
            </Link>
          </li>
        </ul>
      );
    case 5: // Financeiro e Demonstrativos
      return (
        <ul className="pl-9">
          <li className="pt-6">
            <Link
              href="/Prestador/IR"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Informe de Imposto de Renda
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="/Prestador/Demonstrativos"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Demonstrativos
            </Link>
          </li>
          {/* <li className="pt-2">
            <Link
              href="/Prestador/DebitoAutomatico"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-base"
            >
              Solicitação Débito Automático
            </Link>
          </li> */}
        </ul>
      );
    // case 6: // Documentações e norma
    //   return (
    //     <ul className="pl-8">
    //       <li className="pt-2">
    //         <Link
    //           href="/Prestador/Documentos"
    //           className="text-blue-black dark:text-white hover:text-blue-black font-sans text-base"
    //         >
    //           Documentos
    //         </Link>
    //       </li>
    //       <li className="pt-2">
    //         <Link
    //           href="/Prestador/PlanosAtendidos"
    //           className="text-blue-black dark:text-white hover:text-blue-black font-sans text-base"
    //         >
    //           Planos atendidos
    //         </Link>
    //       </li>
    //     </ul>
    //   );
    // case 8: // Comunicados e informações
    //   return (
    //     <ul className="pl-8">
    //       <li className="pt-2">
    //         <Link
    //           href="/Prestador/Comunicado"
    //           className="text-blue-black dark:text-white hover:text-blue-black font-sans text-base"
    //         >
    //           Comunicados
    //         </Link>
    //       </li>
    //       <li className="pt-2">
    //         <Link
    //           href="/"
    //           className="text-blue-black dark:text-white hover:text-blue-black font-sans text-base"
    //         >
    //           TISS
    //         </Link>
    //       </li>
    //       <li className="pt-2">
    //         <Link
    //           href="/Prestador/CalendarioMovimentacao"
    //           className="text-blue-black dark:text-white hover:text-blue-black font-sans text-base"
    //         >
    //           Calendário de fechamentos
    //         </Link>
    //       </li>
    //     </ul>
    //   );
    case 8:
      return (
        <ul className="pl-9">
          <li className="pt-6">
            <Link
              href="/Beneficiario/Financeiro/Pagamentos"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Pagamentos
            </Link>
          </li>
          {/* <li className="pt-2">
            <Link
              href="/Beneficiario/Financeiro/QuitacaoAnualDividas"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-base"
            >
              Quitação anual de dívidas
            </Link>
          </li> */}
          <li className="pt-6">
            <Link
              href="/Beneficiario/Financeiro/Extratos"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Extratos
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="/Beneficiario/Financeiro/Demonstrativos"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Demonstrativos
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="/Beneficiario/Financeiro/IR"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Imposto de renda
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="/Beneficiario/Financeiro/Reembolso"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Reembolso
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="/Beneficiario/Financeiro/SolicitacaoDebitoAutomatico"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Solicitação Débito Automático
            </Link>
          </li>
        </ul>
      );
    case 20:
      return (
        <ul className="pl-9">
          <li className="pt-6">
            <Link
              href="https://iris.unimeduberlandia.coop.br/iris/#/authenticate"
              target="_blank"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Irys
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="https://glpi.unimeduberlandia.coop.br/login.php"
              target="_blank"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              GLPI
            </Link>
          </li>
        </ul>
      );
    case 60:
      return (
        <ul className="pl-9">
          <li className="pt-6">
            <Link
              href="/Cooperado/FinanceiroDemonstrativos/Pagamentos"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Pagamentos
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="/Cooperado/FinanceiroDemonstrativos/IR"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Imposto de renda
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="/Cooperado/FinanceiroDemonstrativos/Demonstrativos"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Demonstrativos
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="/Cooperado/FinanceiroDemonstrativos/CotaCapital"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Cota Capital
            </Link>
          </li>
        </ul>
      );
    case 70:
      return (
        <ul className="pl-9">
          <li className="pt-6">
            <Link
              href="/Empresa/FinanceiroDemonstrativos/Pagamentos"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Pagamentos
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="/Empresa/FinanceiroDemonstrativos/DebitoAutomatico"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Débito automático
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="/Empresa/FinanceiroDemonstrativos/Demonstrativos"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Demonstrativos
            </Link>
          </li>
        </ul>
      );
    case 77:
      return (
        <ul className="pl-9">
          <li className="pt-6">
            <Link
              href="https://iris.unimeduberlandia.coop.br/iris/#/authenticate"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Syst. IRYS
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="https://glpi.unimeduberlandia.coop.br/login.php"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              GLPI
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="/Cooperado/Sistemas/Portalconhecimento"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Portal do conhecimento
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="https://datasus.saude.gov.br/"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              CID DATA SUS
            </Link>
          </li>
        </ul>
      );
    case 90:
      return (
        <ul className="pl-9">
          <li className="pt-6">
            <Link
              href="https://iris.unimeduberlandia.coop.br/iris/#/authenticate"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Syst. IRYS
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="https://glpi.unimeduberlandia.coop.br/login.php"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              GLPI
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="/Cooperado/Sistemas/Portalconhecimento"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              Portal do conhecimento
            </Link>
          </li>
          <li className="pt-6">
            <Link
              href="https://datasus.saude.gov.br/"
              className="text-blue-black dark:text-white hover:text-blue-black font-sans text-sm"
            >
              CID DATA SUS
            </Link>
          </li>
        </ul>
      );

    default:
      return null;
  }
};
