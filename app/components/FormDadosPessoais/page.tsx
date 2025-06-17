"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Aqui você define o tipo das props
interface FormDadosPessoaisProps {
  perfil: string;
}

export default function FormDadosPessoais({ perfil }: FormDadosPessoaisProps) {
  const router = useRouter();

  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ telefone?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { telefone?: string; email?: string } = {};

    const telefoneRegex = /^\(\d{2}\)\s9\s\d{4}\d{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!telefoneRegex.test(telefone)) {
      newErrors.telefone = "Telefone inválido. Use o formato: (99) 9 99999999";
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Email inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      router.push("/Empresa/SegundaViaCartao/NovoCartaoBenef/DadosPessoais/Endereco");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-80 space-y-4">
      {/* Você pode usar a prop aqui, se quiser */}
      {/* <p>Perfil atual: {perfil}</p> */}

      <div>
        <label htmlFor="nomeCompleto" className="block text-sm text-gray-700">
          Nome completo
        </label>
        <input
          disabled
          type="text"
          id="nomeCompleto"
          name="nomeCompleto"
          placeholder="Leticia Ramos"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-100 text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="nomeMae" className="block text-sm text-gray-700">
          Nome da mãe
        </label>
        <input
          disabled
          type="text"
          id="nomeMae"
          name="nomeMae"
          placeholder="Leticia Mãe"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-100 text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="cpf" className="block text-sm text-gray-700">
          CPF
        </label>
        <input
          disabled
          type="text"
          id="cpf"
          name="cpf"
          placeholder="123.456.789-01"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-100 text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="telefone" className="block text-sm text-gray-700">
          Telefone
        </label>
        <input
          type="text"
          id="telefone"
          name="telefone"
          placeholder="(34) 9 9999 9999"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className={`mt-1 w-full rounded-md border px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 ${
            errors.telefone ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.telefone && (
          <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="leticia.apr06@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mt-1 w-full rounded-md border px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-verde-unimed text-white py-2 px-4 rounded-lg mt-6"
      >
        Avançar
      </button>
    </form>
  );
}
