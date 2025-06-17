"use client";

import { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { DocAnexo } from "../Icons/DocAnexo";

interface FormData {

  email: string;
  telefone: string;
  motivo: string;
}

interface Errors {
  [key: string]: string;
}

export default function FormReembolso() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    telefone: "",
    motivo: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Errors = {};
    if (!formData.motivo) newErrors.motivo = "Campo obrigatório";
    if (!formData.telefone) newErrors.telefone = "Campo obrigatório";
    if (!formData.email) newErrors.email = "Campo obrigatório";
    if (!formData.email.includes("@")) newErrors.email = "E-mail inválido";
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
    router.push("/ConfirmPage?id=reembolso");
  };

  return (
    <div className="max-w-xl pt-4 bg-white dark:bg-verde-dark rounded-md">
      <form onSubmit={handleSubmit} className="space-y-6 text-gray-700">
        <div>
          <div className="text-blue-black dark:text-gray-200 text-lg">
            Documentos adicionais
          </div>
          <p className="text-blue-black dark:text-gray-200 text-sm pt-5 pb-5">
            Envie fotos de guias, cartas, laudos e outros documentos
          </p>
          <div className="mt-2 p-4 border-2 border-dashed border-gray-300 rounded-md text-center cursor-pointer">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="flex flex-col items-center text-gray-500 cursor-pointer bg-gray-card"
            >
              <DocAnexo />
              Clique aqui para selecionar um arquivo
            </label>
          </div>
          <ul className="mt-2 space-y-2 ">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-between p-3 border rounded-md"
              >
                <span className="text-gray-700 text-sm ">
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
        <div className="text-blue-black dark:text-gray-200 text-lg">
          Seus dados
        </div>
        <p className="text-blue-black dark:text-gray-200 text-sm">
          Informe seus dados e descreva sua necessidade.
        </p>
        {[
          {
            label: "Celular*",
            name: "telefone",
            placeholder: "(00) 0 0000 0000",
          },
          {
            label: "Email*",
            name: "email",
            placeholder: "Digite seu email",
          },
          {
            label: "Descreva sua necessidade*",
            name: "motivo",
            placeholder: "Descreva",
          },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-sans text-gray-700">
              {field.label}
            </label>
            {field.name === "motivo" ? (
              <textarea
                name={field.name}
                value={(formData as any)[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full h-40 mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <input
                type="text"
                name={field.name}
                value={(formData as any)[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
            {errors[field.name] && (
              <p className="text-red-500 text-sm">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-40 bg-verde-unimed text-white p-3 rounded-md font-semibold hover:bg-green-700"
          onClick={handleButtonClick}
        >
          Confirmar
        </button>
      </form>
    </div>
  );
}
