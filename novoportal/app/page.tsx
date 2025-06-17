"use client";

import { OPTIONS } from "./utils/const";
import { ChevronRight } from "./components/Icons/ChevronRight";
import { useRouter } from "next/navigation";
import { useUserContext } from "./UserContext";
import Logo from "../public/logo-unimed.png";
import Image from "next/image";

type UserType = "secretariado" | "cooperado" | "pessoaFisica" | "empresa" | "prestador";

export default function Login() {
  const router = useRouter();
  const { setUserType } = useUserContext();

  const handleOptionClick = (label: string, href: string, icon: any) => {
    const userTypeMap: Record<string, UserType> = {
      "Sou uma pessoa física": "pessoaFisica",
      "Represento uma empresa": "empresa",
      "Sou um médico cooperado": "cooperado",
      "Sou secretariado": "secretariado",
      "Sou prestador de serviços": "prestador",
    };
  
    const userType = userTypeMap[label];
  
    if (userType && isValidUserType(userType)) {
      setUserType(userType); 
      router.push(href); 
    } else {
      console.error("Tipo de usuário inválido:", userType);
    }
  };
  

  const isValidUserType = (userType: string): userType is UserType => {
    return ["secretariado", "cooperado", "pessoaFisica", "empresa", "prestador"].includes(userType);
  };
  

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="flex items-center justify-start px-6 py-6">
        <Image src={Logo} alt="Logo Unimed" width={150} height={50} />
      </div>

      <div className="flex flex-grow items-center justify-center px-4">
        <div className="w-full max-w-md text-left">
          <h1 className="text-32px font-bold text-blue-black font-sans">
            Seja <span className="text-verde-unimed">bem-vindo!</span>
          </h1>

          <p className="text-18px font-normal text-blue-black mt-2">
            Por favor, escolha a opção que melhor se aplica a você para
            continuar com o login.
          </p>

          <div className="mt-6 space-y-4">
            {OPTIONS.map((option) => (
              <button
                key={option.id}
                className="flex items-center justify-between w-full px-6 py-6 border border-gray-300 rounded-lg text-blue-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                onClick={() => handleOptionClick(option.label, option.redirect.href, option.icon)}
              >
                <div className="flex items-center gap-3 font-sans text-lg">
                  {option.icon && <option.icon />} {option.label}
                </div>
                <ChevronRight />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
