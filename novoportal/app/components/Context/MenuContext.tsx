"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface MenuContextProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("isMenuOpen");
      return storedValue ? JSON.parse(storedValue) : true;
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isMenuOpen", JSON.stringify(isMenuOpen));
    }
  }, [isMenuOpen]);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
