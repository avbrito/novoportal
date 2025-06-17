import { useState } from "react";
import { useRouter } from "next/navigation";
export default function RadioList() {
  const [selected, setSelected] = useState("Consultas médicas");

  const despesas = [
    "Consultas médicas",
    "Exames / Procedimentos / Terapias",
    "Internações",
  ];
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center -mt-40 justify-center bg-white dark:bg-verde-dark p-6">
      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Qual o tipo de despesa?
        </h2>
        <div className="space-y-3">
          {despesas.map((despesa) => (
            <label
              key={despesa}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="tipoDespesa"
                value={despesa}
                checked={selected === despesa}
                onChange={() => setSelected(despesa)}
                className="hidden"
              />
              <div
                className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${
                  selected === despesa
                    ? "border-green-600"
                    : "border-gray-400"
                }`}
              >
                {selected === despesa && (
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full" />
                )}
              </div>
              <span className="text-gray-700 dark:text-white">{despesa}</span>
            </label>
          ))}
        </div>
        <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md" onClick={() => router.push("/Beneficiario/Financeiro/Reembolso/SolicitarReembolso/SolicitarReembolsoTipo/SolicitarReembolsoBusca")}>
          Avançar
        </button>
      </div>
    </div>
  );
}
