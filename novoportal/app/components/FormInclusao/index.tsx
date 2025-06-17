"use client";

import { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface FormData {
  codigo: string;
  nomeFantasia: string;
  razaoSocial: string;
  cnpj: string;
  email: string;
  telefone: string;
  atividade: string;
  solicitante: string;
  motivo: string;
}

interface Errors {
  [key: string]: string;
}

export default function FormInclusao() {
  const [formData, setFormData] = useState<FormData>({
    codigo: "",
    nomeFantasia: "",
    razaoSocial: "",
    cnpj: "",
    email: "",
    telefone: "",
    atividade: "",
    solicitante: "",
    motivo: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Errors = {};
    if (!formData.codigo) newErrors.codigo = "Campo obrigatório";
    if (!formData.nomeFantasia) newErrors.nomeFantasia = "Campo obrigatório";
    if (!formData.email.includes("@")) newErrors.email = "E-mail inválido";
    if (!formData.cnpj.match(/^\d{14}$/)) newErrors.cnpj = "CNPJ inválido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Formulário enviado com sucesso!");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(e.target.files || []);
    setFiles([...files, ...uploadedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/ConfirmPage?id=inclusao");
  };

  return (
    <div className="max-w-[808px] mx-auto p-6 bg-white rounded-md">
      <form onSubmit={handleSubmit} className="space-y-6 text-gray-700">
        {[
          {
            label: "Código do prestador*",
            name: "codigo",
            placeholder: "000000",
          },
          {
            label: "Nome fantasia*",
            name: "nomeFantasia",
            placeholder: "Nome comercial da empresa",
          },
          {
            label: "Razão Social*",
            name: "razaoSocial",
            placeholder: "Nome jurídico registrado",
          },
          { label: "CNPJ*", name: "cnpj", placeholder: "00.000.000/0000-00" },
          {
            label: "Email*",
            name: "email",
            placeholder: "Digite um e-mail válido",
          },
          {
            label: "Telefone para contato",
            name: "telefone",
            placeholder: "(00) 0 0000 0000",
          },
          {
            label: "Ramo de atividade",
            name: "atividade",
            placeholder: "Selecione o setor de atuação",
          },
          {
            label: "Nome do solicitante",
            name: "solicitante",
            placeholder: "Quem está fazendo a solicitação?",
          },
          {
            label: "Motivo da solicitação",
            name: "motivo",
            placeholder: "Explique brevemente o motivo",
          },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-sans text-gray-700">
              {field.label}
            </label>
            <input
              type="text"
              name={field.name}
              value={(formData as any)[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-96 mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="w-96">
          <label className="block text-sm font-sans text-gray-700">
            Anexos
          </label>
          <div className="mt-1 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="text-gray-500 cursor-pointer text-sm"
            >
              Clique aqui para selecionar um arquivo
            </label>
          </div>
          <ul className="mt-2 space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-2 border border-gray-300 rounded-md text-sm text-gray-700"
              >
                <span>
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </span>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FiTrash2 />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-96">
          <button
            type="submit"
            className="mt-6 w-full bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700"
            onClick={handleButtonClick}
          >
            Confirmar solicitação
          </button>
        </div>
      </form>
    </div>
  );
}
