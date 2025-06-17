"use client";
import { useState } from "react";
import { Search } from "../Icons/Search";
import ImprimirSolic from "../ImprimirSolic";

interface ApiResponse {
  resposta: {
    itens: Array<{
      id: string;
      nome: string;
      codigoServico: string;
      nomeServico: string;
      qtdeSolicitada: string;
      qtdeAutorizada: string;
      status: string;
      tipoGuia: string;
      numAut: string;
      dataSolic: string;
      dataParecer: string;
      validade: string;
      canal: string;
    }>;
    cabecalho: {
      numAut: string;
      codCart: string;
      nomeBenef: string;
      solicitante: string;
      nomePrest: string;
      dataSolic: string;
      obsUnimed: string;
    };
  };
}

const Solicitacao = () => {
  const [solicitacao, setSolicitacao] = useState("");
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSolicitacao = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://apisunimed.unimeduberlandia.coop.br/apisuni/Apisunimed/statusDeSolicitacao",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            solicitacao: solicitacao,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Erro ao fazer a solicitação");
      }

      const data: ApiResponse = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4">
        <div className="max-w-[808px] mx-auto overflow-auto bg-white p-8 rounded-lg">
          <h1 className="text-3xl font-sans text-blue-black font-semibold mb-10">
            Status de Solicitação Eletrônica
          </h1>

          <div className="flex flex-col mb-8">
            <label className="text-gray-700 mb-2">
              Número da Solicitação:
            </label>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Informe o número de sua solicitação"
                value={solicitacao}
                onChange={(e) => setSolicitacao(e.target.value)}
                className="min-w-80 border-2 text-blue-black border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:border-green-500"
              />
              <button
                onClick={handleSolicitacao}
                disabled={loading || !solicitacao}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg disabled:bg-gray-400 flex items-center space-x-2 h-11"
              >
                {loading ? (
                  "Carregando..."
                ) : (
                  <>
                    <Search /> <span>Buscar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          {response && response.resposta && (
            <div className="w-full">
              <div className="flex items-center justify-between bg-white pt-4 pb-4 rounded-lg mb-6">
                <h2 className="text-lg font-semibold text-gray-700">
                  ÚLTIMA SOLICITAÇÃO:{" "}
                  <span className="text-verde-escuro">
                    {response.resposta.cabecalho.numAut}
                  </span>
                </h2>
                <ImprimirSolic numAut={response.resposta.cabecalho.numAut} />
              </div>

              <div className="bg-gray-fundo-claro p-4 rounded-lg mb-6 font-sans">
                <div className="grid grid-cols-2 gap-4 text-gray-600 text-sm">
                  <p>
                    <strong className="font-sans font-500">CÓDIGO BENEFICIÁRIO:</strong>{" "}
                    {response.resposta.cabecalho.codCart || "N/A"}
                  </p>
                  <p>
                    <strong className="font-sans font-500">CÓDIGO EXECUTANTE:</strong>{" "}
                    {response.resposta.cabecalho.numAut || "N/A"}
                  </p>
                  <p>
                    <strong className="font-sans font-500">BENEFICIÁRIO:</strong>{" "}
                    {response.resposta.cabecalho.nomeBenef || "N/A"}
                  </p>
                  <p>
                    <strong className="font-sans font-500">EXECUTANTE:</strong>{" "}
                    {response.resposta.cabecalho.nomePrest || "N/A"}
                  </p>
                  <p>
                    <strong className="font-sans font-500">SOLICITANTE:</strong>{" "}
                    {response.resposta.cabecalho.solicitante || "N/A"}
                  </p>
                  <p>
                    <strong className="font-sans font-500">DATA DO RELATÓRIO:</strong>{" "}
                    {response.resposta.cabecalho.dataSolic || "N/A"}
                  </p>
                </div>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="min-w-full bg-[#F5F9F8] border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-verde-escuro text-white uppercase text-sm leading-normal">
                      <th className="py-4 px-4 text-left">Código</th>
                      <th className="py-4 px-4 text-left">Nome Serviço</th>
                      <th className="py-4 px-4 text-left">Qtde Solicitada</th>
                      <th className="py-4 px-4 text-left">Qtde Autorizada</th>
                      <th className="py-4 px-4 text-left">Status</th>
                      <th className="py-4 px-4 text-left">Guia</th>
                      <th className="py-4 px-4 text-left">Número Solicitação</th>
                      <th className="py-4 px-4 text-left">Data Solicitação</th>
                      <th className="py-4 px-4 text-left">Data Liberação</th>
                      <th className="py-4 px-4 text-left">Validade Guia</th>
                      <th className="py-4 px-4 text-left">Canal</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#EAF5EE] text-verde-escuro text-sm font-light text-center">
                    {response.resposta.itens.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-gray-100"
                      >
                        <td className="py-4 px-4">{item.codigoServico || "N/A"}</td>
                        <td className="py-4 px-4">{item.nomeServico || "N/A"}</td>
                        <td className="py-4 px-4">{item.qtdeSolicitada || "N/A"}</td>
                        <td className="py-4 px-4">{item.qtdeAutorizada || "N/A"}</td>
                        <td className="py-4 px-4">{item.status || "N/A"}</td>
                        <td className="py-4 px-4">{item.tipoGuia || "N/A"}</td>
                        <td className="py-4 px-4">{item.numAut || "N/A"}</td>
                        <td className="py-4 px-4">{item.dataSolic || "N/A"}</td>
                        <td className="py-4 px-4">{item.dataParecer || "N/A"}</td>
                        <td className="py-4 px-4">{item.validade || "N/A"}</td>
                        <td className="py-4 px-4">{item.canal || "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-gray-700 text-sm">
                <p>
                  <strong>Observação:</strong>{" "}
                  {response.resposta.cabecalho.obsUnimed || "N/A"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Solicitacao;
