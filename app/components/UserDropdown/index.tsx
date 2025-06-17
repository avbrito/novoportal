"use client";

import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { userInfo } from "../../utils/const"; 

interface userInfo {
  name: string;
  email: string;
  photoUrl: string;
}

const UserDropdown: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100"
      >
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          {userInfo.photoUrl ? (
            <img
              src={userInfo.photoUrl}
              alt="Foto do Usuario"
              style={{ width: "40px", height: "40px" }}
            />
          ) : (
            <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white">
              <span>{userInfo.name?.charAt(0)}</span>
            </div>
          )}
        </div>
        <HiChevronDown size={20} className="text-gray-600 dark:text-white" />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
          <div className="flex items-center px-4 py-2 space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
              {userInfo.photoUrl ? (
                <img
                  src={userInfo.photoUrl}
                  alt="Foto do Usuario"
                  style={{ width: "32px", height: "32px" }}
                />
              ) : (
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white">
                  <span>{userInfo.name?.charAt(0)}</span>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-gray-800">{userInfo.name}</p>
              <p className="text-sm text-gray-600">{userInfo.email}</p>
            </div>
          </div>
          <ul className="py-1">
            <li>
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => alert("Abrindo seus dados")}
              >
                Seus Dados
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => alert("Saindo da conta")}
              >
                Sair dessa Conta
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
