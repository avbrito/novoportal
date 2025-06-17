"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { USER_TYPES } from "../../utils/const";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const isValidCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) sum += parseInt(cpf[i - 1]) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf[9])) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf[i - 1]) * (12 - i);
  remainder = (sum * 10) % 11;
  return remainder === parseInt(cpf[10]);
};

const isValidCNPJ = (cnpj: string): boolean => {
  cnpj = cnpj.replace(/[^\d]/g, "");
  return cnpj.length === 14;
};

const isValidCRM = (crm: string): boolean => crm.length === 5;

interface LoginFormProps {
  userType: keyof typeof USER_TYPES;
}

const LoginForm: React.FC<LoginFormProps> = ({ userType }) => {
  const router = useRouter();
  const userConfig = USER_TYPES[userType];
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    document: Yup.string()
      .required(`${userConfig.label} é obrigatório.`)
      .test("is-valid-document", `${userConfig.label} inválido.`, (value) => {
        if (!value) return false;
        switch (userConfig.validation) {
          case "cpf":
            return isValidCPF(value);
          case "cnpj":
            return isValidCNPJ(value);
          case "crm":
            return isValidCRM(value);
          case "codUnimed":
            return true;  
            case "usuario":
            return true;
          default:
            return false;
        }
      }),
    password: Yup.string()
      .required("A senha é obrigatória.")
      .min(6, "A senha deve ter no mínimo 6 caracteres."),
  });

  return (
    <Formik
      initialValues={{ document: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        const res = await signIn("credentials", {
          redirect: false,
          username: values.document,
          password: values.password,
        });

        console.log("res", res);
        console.log('usertype',userType);
        if (res?.ok) 
        {

          if(userType === 'CPF')
          {
            router.push("/Beneficiario");
          }

          if(userType === 'CNPJ')
          {
            router.push("/Empresa");
          }

          if(userType === 'CRM')
          {
            router.push("/Cooperado");
          }

          if(userType === 'Usuario')
          {
            router.push("/Secretariado");
          }

          if(userType === 'CodUnimed')
          {
            router.push("/Prestador");
          }
          
        } else {
          setFieldError("document", "Usuário ou senha inválidos.");
        }

        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values, handleChange, handleBlur }) => (
        <Form className="mt-6 space-y-4">
          <div>
            <label className="block text-blue-black text-sm font-semibold">
              {userConfig.label}
            </label>
            <Field
              name="document"
              type="text"
              className="w-full px-4 py-2 border text-gray-600 border-gray-400 rounded-lg mt-2 focus:ring-2 focus:ring-verde-unimed focus:border-verde-unimed"
              placeholder={userConfig.placeholder}
            />
            <ErrorMessage
              name="document"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block text-blue-black text-sm font-semibold">
              Senha
            </label>
            <div className="relative mt-2">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border text-gray-600 border-gray-400 rounded-lg focus:ring-2 focus:ring-verde-unimed focus:border-verde-unimed"
                placeholder="Digite sua senha"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <p className="text-sm text-blue-link font-sans cursor-pointer pb-5">
            Esqueci minha senha
          </p>

          <div className="flex items-center space-x-2 pt-3 pb-7">
            <Field
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="w-4 h-4 text-verde-unimed bg-gray-50 rounded border-gray-300 focus:ring-2 focus:ring-verde-unimed"
            />
            <label
              htmlFor="rememberMe"
              className="text-sm text-blue-black font-sans"
            >
              Manter minha conta logada
            </label>
          </div>

          <p className="text-sm text-blue-link font-sans cursor-pointer">Esqueci minha senha</p>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-verde-unimed"
            } text-white text-lg font-semibold font-sans rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-unimed`}
          >
            {isSubmitting ? "Enviando..." : "Entrar"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
