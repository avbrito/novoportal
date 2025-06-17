"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormEnderecoBenef() {
  const router = useRouter();

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [tipoLogradouro, setTipoLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [complemento, setComplemento] = useState("");

  const [errors, setErrors] = useState<{
    cep?: string;
    logradouro?: string;
    tipoLogradouro?: string;
    numero?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!cep.trim()) {
      newErrors.cep = "CEP é obrigatório";
    } else if (!/^\d{5}-?\d{3}$/.test(cep)) {
      newErrors.cep = "CEP inválido (ex: 38411-111)";
    }

    if (!logradouro.trim()) {
      newErrors.logradouro = "Logradouro é obrigatório";
    }

    if (!tipoLogradouro.trim()) {
      newErrors.tipoLogradouro = "Tipo de logradouro é obrigatório";
    }

    if (!numero.trim()) {
      newErrors.numero = "Número é obrigatório";
    } else if (!/^\d+$/.test(numero)) {
      newErrors.numero = "Número deve conter apenas dígitos";
    }

    if (!bairro.trim()) {
      newErrors.bairro = "Bairro é obrigatório";
    }

    if (!cidade.trim()) {
      newErrors.cidade = "Cidade é obrigatória";
    }

    if (!estado.trim()) {
      newErrors.estado = "Estado é obrigatório";
    } else if (!/^[A-Z]{2}$/.test(estado)) {
      newErrors.estado = "Informe a sigla do estado (ex: MG)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      router.push(
        "/Empresa/SegundaViaCartao/NovoCartaoBenef/DadosPessoais/Endereco/Motivo"
      );
    }
  };

  return (
    <div className="max-w-[808px] mx-auto px-4 py-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cep" className="block text-sm text-gray-700">
            CEP
          </label>
          <input
            type="text"
            id="cep"
            name="cep"
            placeholder="38411-111"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            className={`mt-1 w-full rounded-md border px-3 py-2 text-gray-900 ${
              errors.cep ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.cep && (
            <p className="text-red-500 text-sm mt-1">{errors.cep}</p>
          )}
        </div>

        <div>
          <label htmlFor="logradouro" className="block text-sm text-gray-700">
            Logradouro
          </label>
          <input
            type="text"
            id="logradouro"
            name="logradouro"
            placeholder="Rua dos Bobos"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
            className={`mt-1 w-full rounded-md border px-3 py-2 text-gray-900 ${
              errors.logradouro ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.logradouro && (
            <p className="text-red-500 text-sm mt-1">{errors.logradouro}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="tipoLogradouro"
            className="block text-sm text-gray-700"
          >
            Tipo de logradouro
          </label>
          <select
            id="tipoLogradouro"
            name="tipoLogradouro"
            value={tipoLogradouro}
            onChange={(e) => setTipoLogradouro(e.target.value)}
            className={`mt-1 w-full rounded-md border px-3 py-2 text-gray-900 ${
              errors.tipoLogradouro ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Selecione...</option>
            <option value="Rua">Rua</option>
            <option value="Avenida">Avenida</option>
          </select>
          {errors.tipoLogradouro && (
            <p className="text-red-500 text-sm mt-1">{errors.tipoLogradouro}</p>
          )}
        </div>

        <div>
          <label htmlFor="numero" className="block text-sm text-gray-700">
            Número
          </label>
          <input
            type="text"
            id="numero"
            name="numero"
            placeholder="0"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            className={`mt-1 w-full rounded-md border px-3 py-2 text-gray-900 ${
              errors.numero ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.numero && (
            <p className="text-red-500 text-sm mt-1">{errors.numero}</p>
          )}
        </div>

        <div>
          <label htmlFor="bairro" className="block text-sm text-gray-700">
            Bairro
          </label>
          <input
            type="text"
            id="bairro"
            name="bairro"
            placeholder="João de Barro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            className={`mt-1 w-full rounded-md border px-3 py-2 text-gray-900 ${
              errors.bairro ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.bairro && (
            <p className="text-red-500 text-sm mt-1">{errors.bairro}</p>
          )}
        </div>

        <div>
          <label htmlFor="cidade" className="block text-sm text-gray-700">
            Cidade
          </label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            placeholder="Uberlândia"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className={`mt-1 w-full rounded-md border px-3 py-2 text-gray-900 ${
              errors.cidade ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.cidade && (
            <p className="text-red-500 text-sm mt-1">{errors.cidade}</p>
          )}
        </div>

        <div>
          <label htmlFor="estado" className="block text-sm text-gray-700">
            Estado
          </label>
          <input
            type="text"
            id="estado"
            name="estado"
            placeholder="MG"
            value={estado}
            onChange={(e) => setEstado(e.target.value.toUpperCase())}
            maxLength={2}
            className={`mt-1 w-full rounded-md border px-3 py-2 text-gray-900 ${
              errors.estado ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.estado && (
            <p className="text-red-500 text-sm mt-1">{errors.estado}</p>
          )}
        </div>

        <div>
          <label htmlFor="complemento" className="block text-sm text-gray-700">
            Complemento
          </label>
          <input
            type="text"
            id="complemento"
            name="complemento"
            placeholder="Adicione um complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
          />
        </div>

        <button
          type="submit"
          className="bg-verde-unimed text-white py-2 px-4 rounded-lg mt-6"
          onClick={handleSubmit}
        >
          Avançar
        </button>
      </form>
    </div>
  );
}
