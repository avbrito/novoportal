"use client";

import UserDropdown from "../UserDropdown";
import { Help } from "../Icons/Help";
import { NotificationBell } from "../Icons/NotificationBell";
import { Hamburguer } from "../Icons/Hamburguer";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white dark:bg-verde-dark dark:text-white border-gray-unimed dark:border-gray-800 border-2 flex items-center px-4 py-8 z-50 justify-between">
      <div className="flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <Hamburguer />
        </button>
        <h1 className="text-lg font-bold ml-4">
          <div className="no-drag">
            <img className="no-drag"
              src="/assets/imgs/logo-unimed.png"
              alt="Logo Unimed"
              width={140}
              height={40}
            />
          </div>
        </h1>
      </div>

      <div className="flex items-center space-x-2">
        <button
          className="relative p-2 rounded-full hover:bg-gray-100 dark:text-white focus:outline-none"
          aria-label="Notificações"
        >
          <Help />
        </button>
        <button
          className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none"
          aria-label="Notificações"
        >
          <Link href="/Secretariado/Comunicado">
            <NotificationBell className="text-blue-black dark:text-white" />
          </Link>
          <span className="absolute top-2 right-2 block w-2.5 h-2.5 bg-red-600 rounded-full"></span>
        </button>
        {/* <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-14 h-7 flex items-center bg-gray-300 dark:bg-verde-escuro rounded-full p-1 transition duration-300 relative"
        >
          <span className="absolute left-1 text-yellow-500 dark:text-gray-400">
            🌞
          </span>
          <span className="absolute right-1 text-gray-600 dark:text-gray-200">
            🌙
          </span>
          <div
            className={`w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition duration-300 ${
              theme === "dark" ? "translate-x-7" : "translate-x-0"
            }`}
          ></div>
        </button> */}
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
