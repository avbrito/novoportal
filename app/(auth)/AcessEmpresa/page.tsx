"use client";

import Link from "next/link";
import { ArrowLeft } from "../../components/Icons/ArrowLeft";
import LoginForm from "../../components/LoginForm/index";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/Login");
  };


  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="flex items-center justify-start px-6 py-6">
        <div className="no-drag">
          <img
            className="no-drag"
            src="/assets/imgs/logo-unimed.png"
            alt="Logo Unimed"
            width={150}
            height={50}
          />
        </div>
      </div>

      <div className="flex flex-grow items-center justify-center px-4">
        <div className="w-full max-w-md text-left">
          <div
            className="flex items-center cursor-pointer mb-4"
            onClick={handleGoBack}
          >
            <ArrowLeft />
            <span className="ml-2 text-blue-black">Voltar</span>
          </div>

          <h1 className="text-32px font-bold text-blue-black font-sans">
            Insira seus dados e{" "}
            <span className="text-verde-unimed">acesse o seu plano!</span>
          </h1>

          <LoginForm userType="CNPJ" />
          <br />
          <Link href="/Empresa">
            <button className="w-full py-3 bg-verde-unimed text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-unimed">
              Entrar sem validação
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
