Sidebar: "use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUserContext } from "../../UserContext";
import { Exit } from "../Icons/Exit";
import { IoIosArrowDown } from "react-icons/io";
import { renderDropdownOptions } from "../RenderDropDownOptions";
import { useRouter } from "next/navigation";

interface SideBarProps {
  isMenuOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isMenuOpen }) => {
  const pathname = usePathname();
  const { sidebarOptions, userType } = useUserContext();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (optionId: number) => {
    setOpenDropdown(openDropdown === optionId ? null : optionId);
  };

  const router = useRouter();

  const handleLogout = () => {
    router.push("/Login");
  };

  return (
    <aside
      className={`fixed top-16 left-0 h-[calc(100vh-64px)] border-2 border-gray-unimed dark:border-gray-800 border-t-0 bg-white dark:bg-verde-dark transition-all duration-300 ${
        isMenuOpen ? "w-64" : "w-20"
      } flex flex-col`}
    >
      <ul className="flex-grow overflow-y-auto text-blue-black dark:text-white p-4 space-y-4">
        {sidebarOptions.map((option) => {
          const isActive = pathname === option.redirect?.href;
          const isDropdownVisible = openDropdown === option.id;

          const hasDropdown =
            (userType === "prestador" && [2, 3, 5, 6, 7].includes(option.id)) ||
            (userType === "pessoaFisica" && option.id === 8) ||
            (userType === "secretariado" && option.id === 20) ||
            (userType === "empresa" && option.id === 70) ||
            (userType === "cooperado" && [60, 90].includes(option.id));

          return (
            <li key={option.id}>
              <div
                className={`flex items-center h-11 px-[10px] py-[10px] cursor-pointer ${
                  isActive
                    ? "border-r-4 rounded border-green-500 bg-gray-unimed"
                    : ""
                }`}
                onClick={() => {
                  if (hasDropdown) toggleDropdown(option.id);
                }}
              >
                {isMenuOpen ? (
                  <div className="w-full flex items-center gap-[10px]">
                    {option.icon && <option.icon />}
                    {hasDropdown ? (
                      <>
                        <span className="text-blue-black dark:text-white hover:text-blue-black w-full font-sans text-sm">
                          {option.label}
                        </span>
                        <IoIosArrowDown
                          className={`transition-transform ${
                            isDropdownVisible ? "rotate-180" : ""
                          }`}
                        />
                      </>
                    ) : (
                      <Link
                        href={option.redirect?.href || "#"}
                        className="text-blue-black dark:text-white hover:text-blue-black w-full font-sans text-sm"
                      >
                        {option.label}
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className="w-full flex justify-center items-center">
                    {option.icon && <option.icon />}
                  </div>
                )}
              </div>
              {isDropdownVisible &&
                isMenuOpen &&
                renderDropdownOptions(option.id)}
            </li>
          );
        })}
      </ul>
      <div className="pl-2 border-t border-gray-300 dark:border-gray-800">
        <button
          className="w-full p-4 flex items-center gap-[10px] text-blue-black dark:text-white hover:text-blue-black"
          onClick={handleLogout}
        >
          <Exit />
          {isMenuOpen && (
            <span className="font-sans text-sm text-blue-black dark:text-white">
              Sair da conta
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
