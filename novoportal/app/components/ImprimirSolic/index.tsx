"use client";

const ImprimirSolic = ({ numAut }: { numAut: string }) => {
  return (
    <form
      method="POST"
      action="https://www.unimeduberlandia.coop.br/siteunimed/site/secretariasAutorizacoesImprimir-dyad.php"
      target="_blank"
      className="ml-auto"
    >
      <input type="hidden" name="service" value="statusSolicitacao" />
      <input type="hidden" name="numAut" value={numAut} />
      <div className="text-right">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          IMPRIMIR
        </button>
      </div>
    </form>
  );
};

export default ImprimirSolic;
