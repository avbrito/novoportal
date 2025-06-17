import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import campanhaNatal from "../../../public/campanhaNatal.png";

interface ValorDoacao {
  valor: string;
}

interface Campanha {
  idCampanha: string;
  nomeCampanha: string;
  urlImagem: string;
  descricao: string;
  valorDoacao?: ValorDoacao[];
}

interface Props {
  campanha: Campanha;
  onConfirm: (valor: string) => void;
  onClose: () => void;
}

const CampanhaModal = ({ campanha, onConfirm, onClose }: Props) => {
  const [etapa, setEtapa] = useState<"imagem" | "valores">("imagem");
  const [selected, setSelected] = useState("");
  const [customValue, setCustomValue] = useState("");

  const isConfirmDisabled =
    selected === "" || (selected === "outro" && customValue.trim() === "");

  return (
    <Dialog
      open={true}
      onClose={onClose}
      className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <Dialog.Panel
        className={`bg-white rounded-lg p-6 max-w-md w-95 ${
          etapa === "imagem" ? "h-5/6" : "h-auto max-h-screen"
        }`}
      >
        {etapa === "imagem" ? (
          <div className="relative w-full h-auto">
            <Image
              src={campanhaNatal}
              alt="Imagem da campanha"
              width={500}
              height={300}
              className="rounded-md w-auto h-auto"
            />

            {/* <Image
              src={campanha.urlImagem}
              alt="Imagem da campanha"
              width={500}
              height={300}
              className="rounded-md w-auto h-auto"
            /> */}

            <div className="absolute bottom-4 left-0 w-full flex justify-center gap-4 px-4">
              <button
                onClick={() => setEtapa("valores")}
                className="w-1/2 bg-white font-sans font-semibold text-verde-escuro py-2 rounded"
              >
                Quero participar!
              </button>
            </div>
          </div>
        ) : (
          <>
            <Dialog.Title className="text-xl font-bold mb-2 text-blue-black">
              Escolha um Presente de Natal
            </Dialog.Title>
            <p className="text-sm text-blue-black mb-4">
              Neste Natal, sua contribuição pode levar alegria e esperança para
              quem mais precisa. Escolha um valor e ajude a tornar essa data
              especial para muitas famílias.
            </p>

            <div className="space-y-2 mb-4">
              {campanha.valorDoacao?.map((item, idx) => (
                <label
                  key={idx}
                  className="flex items-center space-x-2 text-blue-black"
                >
                  <input
                    type="radio"
                    name="valor"
                    value={item.valor}
                    checked={selected === item.valor}
                    onChange={() => setSelected(item.valor)}
                  />
                  <span className="text-blue-black">R$ {item.valor}</span>
                </label>
              ))}

              <label className="flex items-center space-x-2 mt-4">
                <input
                  type="radio"
                  name="valor"
                  value="outro"
                  checked={selected === "outro"}
                  onChange={() => setSelected("outro")}
                />
                <span className="text-blue-black">Outro valor</span>
              </label>

              {selected === "outro" && (
                <div className="mt-2">
                  <label className="text-blue-black">Digite um valor</label>
                  <input
                    type="text"
                    name="outro"
                    placeholder="Escolha o quanto deseja doar."
                    value={customValue}
                    onChange={(e) => setCustomValue(e.target.value)}
                    className="w-full p-2 border border-gray-300 text-blue-black rounded"
                  />
                </div>
              )}
            </div>

            <button
              className="w-full bg-verde-unimed text-white p-2 rounded disabled:opacity-50"
              disabled={isConfirmDisabled}
              onClick={() =>
                onConfirm(selected === "outro" ? customValue : selected)
              }
            >
              Confirmar doação
            </button>
          </>
        )}
      </Dialog.Panel>
    </Dialog>
  );
};

export default CampanhaModal;
