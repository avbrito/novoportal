import { useState } from "react";
import {
  STATUS_OPTIONS,
  TIPO_GUIA_OPTIONS,
  CONTRATO_OPTIONS,
  TABELA_DADOS,
} from "@/app/utils/const";

export default function ConsultaStatusExecucao() {
  const [mostrarTabela, setMostrarTabela] = useState(false);
  const [mostrarHr, setMostrarHr] = useState(false);
  const [numAutorizacao, setNumAutorizacao] = useState("");
  const [dadosFiltrados, setDadosFiltrados] = useState(TABELA_DADOS);
  const [mensagemErro, setMensagemErro] = useState(""); 

  const handlePesquisar = () => {
    if (!numAutorizacao) {
      setMensagemErro("Por favor, insira um número de autorização para pesquisar.");
      setMostrarTabela(false);
      return; 
    }

    setMensagemErro(""); 

    const dadosEncontrados = TABELA_DADOS.filter(item =>
      item.numAutorizacao.includes(numAutorizacao)
    );

    setDadosFiltrados(dadosEncontrados);
    setMostrarTabela(dadosEncontrados.length > 0); 
    setMostrarHr(true);
  };

  return (
    <div className="p-6 bg-white dark:bg-verde-dark min-h-screen text-blue-black">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-sans text-blue-black dark:text-white pb-3">
          Consulta de status de execução
        </h2>
        <p className="text-blue-medium text-xs dark:text-gray-300">
          Acompanhe o andamento das solicitações do seu CNPJ de forma rápida e
          prática.
        </p>

        <div className="rounded-lg pt-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            {[ 
              { label: "Número da autorização*", placeholder: "29249" },
              { label: "Data da solicitação inicial*", placeholder: "MM/AA" },
              { label: "Data da solicitação final*", placeholder: "MM/AA" },
              { label: "Número da carteira", placeholder: "0 000 000000000000 0" },
              { label: "Nome do beneficiário", placeholder: "Amanda Brito" },
              { label: "Solicitante contratado", placeholder: "Maria das Dores" },
            ].map((item, index) => (
              <div key={index}>
                <label className="block text-gray-700 dark:text-white pb-3">{item.label}</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-xl border-gray-borda dark:bg-gray-300"
                  placeholder={item.placeholder}
                  value={item.label === "Número da autorização*" ? numAutorizacao : ""}
                  onChange={(e) => {
                    if (item.label === "Número da autorização*") {
                      setNumAutorizacao(e.target.value);
                    }
                  }}
                />
              </div>
            ))}

            {[ 
              { label: "Status da solicitação", options: STATUS_OPTIONS },
              { label: "Tipo guia", options: TIPO_GUIA_OPTIONS },
              { label: "Contrato*", options: CONTRATO_OPTIONS },
            ].map((item, index) => (
              <div key={index}>
                <label className="block text-gray-700 dark:text-white pb-3">{item.label}</label>
                <select className="w-full p-2 border rounded-xl border-gray-borda dark:bg-gray-300">
                  <option>Selecione</option>
                  {item.options.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}

            {[ 
              { label: "CNPJ", placeholder: "00.000.000/0000-00" },
              { label: "Código de serviço", placeholder: "1234" },
              { label: "Serviço", placeholder: "Nome serviço" },
            ].map((item, index) => (
              <div key={index}>
                <label className="block text-gray-700 dark:text-white pb-3">{item.label}</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-xl border-gray-borda dark:bg-gray-300"
                  placeholder={item.placeholder}
                />
              </div>
            ))}
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              className="bg-green-500 text-white text-sm font-sans px-4 py-2 rounded-lg"
              onClick={handlePesquisar}
            >
              Pesquisar
            </button>
            <button
              className="border border-verde-unimed text-verde-unimed px-4 py-2 rounded-lg"
              onClick={() => {
                setMostrarTabela(false);
                setMostrarHr(false);
              }}
            >
              Limpar
            </button>
          </div>
        </div>
      </div>

      {mostrarHr && <hr className="w-full mt-5" />}

      {mensagemErro && (
        <div className="mt-6 text-left text-red-500">
          {mensagemErro}
        </div>
      )}

      {mostrarTabela ? (
        dadosFiltrados.length > 0 ? (
          <div className="mt-6">
            <table className="w-full border-collapse border rounded-xl overflow-hidden">
              <thead className="bg-verde-escuro text-white text-center">
                <tr>
                  <th className="p-5">TIPO GUIA</th>
                  <th className="p-5">Nº AUTORIZAÇÃO</th>
                  <th className="p-5">Nº CARTEIRA</th>
                  <th className="p-5">BENEFICIÁRIO</th>
                  <th className="p-5">DATA SOLICITAÇÃO</th>
                  <th className="p-5">SOLICITANTE CONTRATADO</th>
                  <th className="p-5">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {dadosFiltrados.map((item, index) => (
                  <tr key={index} className="bg-verde-background text-verde-escuro justify-center text-xs font-sansBold rounded-xl">
                    <td className="py-8 pl-4">{item.tipoGuia}</td>
                    <td className="py-8 pl-4">{item.numAutorizacao}</td>
                    <td className="py-8 pl-4">{item.codigoCartao}</td>
                    <td className="py-8 pl-4">{item.nomeBeneficiario}</td>
                    <td className="py-8 pl-4">{item.dataInicial}</td>
                    <td className="py-8 pl-4">{item.solicitante}</td>
                    <td className="p-2 text-center text-xs text-verde-escuro font-sans">
                      <b>{item.status}</b>
                      <br />
                      Motivo: {item.motivo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-6 text-left text-red-500">
            Nenhum dado encontrado para o número de autorização informado.
          </div>
        )
      ) : null}
    </div>
  );
}
