import React from 'react';

interface SucessoProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const Sucesso: React.FC<SucessoProps> = ({ icon, title, subtitle, buttonText, onButtonClick}) => {
  return (
    <div className="flex flex-col w-2/4 items-center justify-center p-6 rounded-lg">
      <div className="text-4xl mb-4">
        {icon}
      </div>
      <h2 className="text-lg font-semibold mb-4 text-blue-black dark:text-white">{title}</h2>
      <p className="text-sm text-blue-medium dark:text-gray-400 mb-4">{subtitle}</p>
      <button 
        className=" border-green-600 border-2 text-green-600 py-2 px-4 rounded-lg mt-5"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Sucesso;
