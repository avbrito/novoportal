import React, { useState } from "react";
import { FiFilter, FiUser, FiPhone, FiMapPin, FiSearch } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { CloseIcon } from "../Icons/CloseIcon";

export default function FiltersDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [favorites, setFavorites] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([
    "Centro de imagem",
    "Clínica",
    "Hospital",
    "Laboratório",
    "Médico",
    "Pronto socorro",
  ]);
  const [specialty, setSpecialty] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setFavorites(false);
    setSelectedTypes([]);
    setSpecialty("");
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div className="w-full font-sans p-4">
      <div className="flex items-center mb-4 relative">
        <button
          className="flex items-center bg-[#00995C] text-white px-5 py-2 rounded-full"
          onClick={toggleDropdown}
        >
          <FiFilter className="mr-2" />
          <span>Filtros</span>
        </button>

        <span className="text-gray-400 pl-2">
          {selectedTypes.length > 0
            ? selectedTypes.join(", ")
            : "Nenhum selecionado"}
        </span>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white w-80 p-6 shadow-lg">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-lg font-bold text-blue-black">
                <button className="text-blue-black mr-2" onClick={closeModal}>
                  <CloseIcon />
                </button>
                Filtros
              </h2>
              <button
                onClick={clearFilters}
                className="text-blue-600 text-sm font-medium"
              >
                Limpar filtros
              </button>
            </div>

            <div className="mb-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={favorites}
                  onChange={() => setFavorites(!favorites)}
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <span className="text-gray-700">Apenas favoritos</span>
              </label>
            </div>

            <h3 className="font-bold text-gray-800 mb-2">Tipo de prestador</h3>
            {["Centro de imagem", "Clínica", "Hospital", "Laboratório", "Médico", "Pronto socorro"].map((type) => (
              <label key={type} className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeChange(type)}
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <span className="text-gray-700">{type}</span>
              </label>
            ))}

            <h3 className="font-bold text-gray-800 mt-4 mb-2">Especialidade</h3>
            <div className="relative">
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Selecione uma especialidade"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border-gray-unimed border-2 rounded-lg text-gray-700 focus:ring focus:ring-green-300"
              />
            </div>

            <button
              className="w-full bg-[#00995C] text-white py-3 rounded-lg mt-6"
              onClick={() => setIsOpen(false)}
            >
              Aplicar filtros
            </button>
          </div>
        )}
      </div>

      <div className="text-gray-500 mb-4">50 listado(s) de 762</div>

      <div className="border rounded-lg mb-4 flex flex-col md:flex-row p-6">
        <div className="flex-1">
          <div className="flex items-center bg-blue-50 rounded px-1 py-0.5 w-fit h-5">
            <FiUser className="h-3.5 w-3.5 text-slate-800" strokeWidth={1.5} />
            <span className="text-slate-800 text-xs font-medium ml-1">Médico</span>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">Lucas Silveira</h2>
          <p className="text-gray-500 mb-6">Cirurgia do aparelho digestivo</p>
        </div>
        <div className="border-t md:border-t-0 md:border-l p-6 flex-1">
          <div className="space-y-2 mb-4">
            <div className="flex items-center">
              <div className="bg-[#00995C] rounded-md h-6 w-6 flex items-center justify-center mr-2">
                <AiOutlineWhatsApp size={16} className="text-white" />
              </div>
              <div className="bg-[#00995C] rounded-md h-6 w-6 flex items-center justify-center mr-2">
                <FiPhone size={16} className="text-white" />
              </div>
              <span className="text-gray-700">(34) 3210 9309</span>
            </div>
            <div className="flex items-center">
              <div className="bg-[#00995C] rounded-md h-6 w-6 flex items-center justify-center mr-2">
                <AiOutlineWhatsApp size={16} className="text-white" />
              </div>
              <div className="bg-[#00995C] rounded-md h-6 w-6 flex items-center justify-center mr-2">
                <FiPhone size={16} className="text-white" />
              </div>
              <span className="text-gray-700">(34) 9 9840 1830</span>
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <FiMapPin size={20} className="text-green-600 mr-2 mt-1" />
          <div>
            <p className="text-gray-700">R. Rafael Marino Neto 600</p>
            <p className="text-gray-700">Loja 3 Uberlândia MG</p>
          </div>
        </div>
      </div>
    </div>
  );
}
