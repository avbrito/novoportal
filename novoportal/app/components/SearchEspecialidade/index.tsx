import { useState } from "react";
import { Lupa } from "../Icons/Lupa";
import { useRouter } from "next/navigation";

const especialidades = [
  "Psiquiatria",
  "Psicologia",
  "Pneumologia",
  "Patologia",
  "Proctologia",
  "Podologia",
];

export default function SearchEspecialidade() {
  const [especialidade, setEspecialidade] = useState("");
  const [filteredEspecialidades, setFilteredEspecialidades] = useState<
    string[]
  >([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEspecialidade(value);

    if (value) {
      setFilteredEspecialidades(
        especialidades.filter((esp) =>
          esp.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredEspecialidades([]);
    }
  };

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-verde-dark p-6">
      <div className="w-full max-w-md">
        <h2 className="text-lg font-sans text-blue-black font-normal dark:text-white mb-4">
          Para qual especialidade precisa de atendimento?
        </h2>
        <div className="relative w-full">
          <div className="flex border-gray-borda rounded-xl w-full">
            <input
              type="text"
              placeholder="Busque por especialidades médicas"
              value={especialidade}
              onChange={handleChange}
              className="w-full p-3 text-gray-700 outline-none border-2 rounded-l-lg border-gray-borda"
            />
            <button className="bg-verde-unimed text-white px-4 py-3 flex items-center rounded-r-lg">
              <Lupa /> Buscar
            </button>
          </div>
          {filteredEspecialidades.length > 0 && (
            <ul className="absolute w-full text-blue-black bg-white border rounded-lg mt-1 shadow-md max-h-48 overflow-y-auto">
              {filteredEspecialidades.map((esp, index) => (
                <li
                  key={index}
                  className="p-3 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setEspecialidade(esp);
                    setFilteredEspecialidades([]);
                  }}
                >
                  {esp}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          className="mt-10 bg-verde-unimed hover:bg-green-700 text-white text-lg font-sans py-2 px-6 rounded-lg w-fit"
          onClick={() =>
            router.push(
              "/Beneficiario/Financeiro/Reembolso/SolicitarReembolso/SolicitarReembolsoTipo/SolicitarReembolsoBusca/FormularioReembolso"
            )
          }
        >
          Avançar
        </button>
      </div>
    </div>
  );
}
