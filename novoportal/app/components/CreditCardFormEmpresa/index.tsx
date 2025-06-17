"use client";

import React, { useState, ChangeEvent } from "react";
import { banks } from "../../utils/const";
import { ArrowLeftBlue } from "../Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";
import "./index.css";
import { Aproximacao } from "../Icons/Aproximacao";

interface CardDataBanks {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
  focus: string;
  backgroundColor: string;
  cardBrand: string;
  bankName: string;
}

interface BankDetails {
  bins: string[];
  color: string;
  name: string;
}

const getBankDetails = (number: string): BankDetails => {
  for (const [bank, details] of Object.entries(banks)) {
    if (details.bins.some((bin) => number.startsWith(bin))) {
      return { bins: details.bins, color: details.color, name: bank };
    }
  }
  return { bins: [], color: "#737373", name: "" };  
};


const getCardBrand = (number: string): string => {
  switch (true) {
    case /^(50[6-9]|636|438|457|401|431|451|509|650|651|655)/.test(number):
      return "elo";
    case /^(50|56|57|58|60|67)/.test(number):
      return "maestro";
    case number.startsWith("4"):
      return "visa";
    case number.startsWith("5"):
      return "mastercard";
    case number.startsWith("6"):
      return "discover";
    case number.startsWith("34") || number.startsWith("37"):
      return "american-express";
    default:
      return "";
  }
};

const CreditCardForm: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/ConfirmPage?id=pagamentoEmpresa");
  };

  const [cardData, setCardData] = useState<CardDataBanks>({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
    focus: "",
    backgroundColor: "#CBCBCB",
    cardBrand: "",
    bankName: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    
    if (name === "expiry") {
      
      formattedValue = value.replace(/\D/g, "");

      
      if (formattedValue.length > 2) {
        formattedValue = formattedValue.substring(0, 2) + "/" + formattedValue.substring(2, 4);
      }
    }

    setCardData((prev) => {
      if (name === "number") {
        const { name: bankName, color } = getBankDetails(value.replace(/\s+/g, ""));
        return {
          ...prev,
          [name]: value.replace(/\s+/g, ""),
          cardBrand: getCardBrand(value.replace(/\s+/g, "")),
          backgroundColor: color,
          bankName,
        };
      }
      return { ...prev, [name]: formattedValue }; 
    });
  };

  const handleRedirect = () => {
    router.back();
  };

  return (
  <div className="w-full px-4">
    <div className="max-w-[808px] mx-auto flex flex-row items-start justify-between gap-8">
      <form className="w-1/2 flex flex-col gap-4">
        <div className="pt-2 bg-white dark:bg-verde-dark w-full justify-center text-left">
          <h2 className="flex items-center text-2xl text-blue-black font-sans my-10">
            <div onClick={handleRedirect} className="cursor-pointer">
              <ArrowLeftBlue />
            </div>
            <span className="ml-2 dark:text-white">Detalhes do pagamento</span>
          </h2>
        </div>

        <div className="flex flex-col mb-4">
          <p className="text-gray-600 dark:text-gray-300">Você está pagando</p>
          <p className="text-blue-black dark:text-white font-sansBold text-2xl">R$ 824,10</p>
        </div>

        <p className="text-blue-black dark:text-gray-300 font-sansBold mb-2">Dados do cartão</p>

        <div className="flex flex-col">
          <label htmlFor="number" className="text-sm font-semibold mb-1 text-blue-black dark:text-gray-300">
            Número do Cartão
          </label>
          <input
            type="tel"
            name="number"
            id="number"
            className="border border-gray-300 rounded-lg p-2 text-blue-black"
            onChange={handleInputChange}
            maxLength={16}
            placeholder="5389 5057 0958 3155"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold mb-1 text-blue-black dark:text-gray-300">
            Nome no Cartão
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-gray-300 rounded-lg p-2 text-blue-black"
            onChange={handleInputChange}
            placeholder="Nilo Miranda"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="expiry" className="text-sm font-semibold mb-1 text-blue-black dark:text-gray-300">
              Validade
            </label>
            <input
              type="text"
              name="expiry"
              id="expiry"
              className="border border-gray-300 rounded-lg p-2 text-blue-black"
              onChange={handleInputChange}
              maxLength={5}
              placeholder="12/25"
              value={cardData.expiry}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="cvv" className="text-sm font-semibold mb-1 text-blue-black dark:text-gray-300">
              Código de segurança (CVV)
            </label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              className="border border-gray-300 rounded-lg p-2 text-blue-black"
              onFocus={() => setIsFlipped(true)}
              onBlur={() => setIsFlipped(false)}
              maxLength={3}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-col w-1/4">
          <label htmlFor="installments" className="text-sm font-semibold mb-1 text-blue-black dark:text-gray-300">
            Parcelar em
          </label>
          <select
            name="select"
            className="border border-gray-300 rounded-lg p-2 text-blue-black"
          >
            <option value="valor1">1x</option>
            <option value="valor2">2x</option>
            <option value="valor3">3x</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleButtonClick}
          className="w-2/4 bg-green-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-700 mb-3"
        >
          Confirmar Pagamento
        </button>
      </form>

      <div className="credit-card-container">
        <div
          className={`credit-card ${isFlipped ? "flipped" : ""}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className="credit-card-front w-96 h-56 rounded-xl shadow-lg flex flex-col justify-between p-4 text-white transition-all relative"
            style={{ backgroundColor: cardData.backgroundColor }}
          >
            <div className="flex justify-between items-start">
              <span className="font-bold text-lg">{cardData.bankName || "BANCO"}</span>
              <div className="w-6 h-6"><Aproximacao /></div>
            </div>
            <div className="text-xl font-mono tracking-wide">
              {cardData.number.replace(/(.{4})/g, "$1 ") || "**** **** **** ****"}
            </div>
            <div className="flex justify-between items-center text-sm mt-4">
              <span>{cardData.name || "NOME DO TITULAR"}</span>
              <span>{cardData.expiry || "MM/AA"}</span>
              {cardData.cardBrand && (
                <img
                  src={`/assets/imgs/${cardData.cardBrand}.png`}
                  alt={cardData.cardBrand}
                  className="w-10"
                />
              )}
            </div>
          </div>

          <div
            className="credit-card-back w-96 h-56 rounded-xl shadow-lg flex flex-col justify-between p-4 text-white transition-all relative"
            style={{ backgroundColor: cardData.backgroundColor }}
          >
            <div className="w-full bg-black h-8 mb-2"></div>
            <div className="text-right pr-4">
              <span>{cardData.cvv || "CVV"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default CreditCardForm;
