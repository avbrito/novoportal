'use client'

import React, { ReactNode } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { useMenu } from "@/app/components/Context/MenuContext";
import { UserProvider } from "../UserContext";
import { ThemeProvider } from "next-themes";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  

  return (
    <div className="flex flex-col min-h-screen">
      <ThemeProvider attribute="class">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="flex flex-1 pt-16">
      
        <SideBar isMenuOpen={isMenuOpen} />
        <main
          className={`flex-1 bg-white dark:bg-verde-dark p-0 transition-all duration-300 ${
            isMenuOpen ? "ml-64" : "ml-20"
          }`}
        >
          {children}
        </main>
        
      </div>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
