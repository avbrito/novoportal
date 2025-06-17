"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { SIDEBAR_OPTIONS } from "./utils/const";

type UserType = "secretariado" | "cooperado" | "pessoaFisica" | "empresa" | "prestador";

interface UserContextType {
  userType: UserType | null;
  setUserType: (type: UserType) => void;
  sidebarOptions: typeof SIDEBAR_OPTIONS[UserType];
  crm: string | null;
  setCrm: (crm: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userType, setUserTypeState] = useState<UserType | null>(null);
  const [crm, setCrmState] = useState<string | null>(null);


  useEffect(() => {
    const storedUserType = localStorage.getItem("userType") as UserType | null;
    const storedCrm = localStorage.getItem("crm");
    if (storedUserType) setUserTypeState(storedUserType);
    if (storedCrm) setCrmState(storedCrm);
  }, []);

  const setUserType = (type: UserType) => {
    setUserTypeState(type);
    localStorage.setItem("userType", type);
  };

  const setCrm = (crm: string) => {
    setCrmState(crm);
    localStorage.setItem("crm", crm);
  };

  const sidebarOptions = userType ? SIDEBAR_OPTIONS[userType] || [] : [];

  return (
    <UserContext.Provider value={{ userType, setUserType, sidebarOptions, crm, setCrm }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext deve existir no UserProvider");
  }
  return context;
};
