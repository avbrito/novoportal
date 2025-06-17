import React from "react";
import Image, { StaticImageData } from "next/image";

interface segViaCartaoProps {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  subtitleTwo: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const segViaCartao: React.FC<segViaCartaoProps> = ({
  image,
  title,
  subtitle,
  subtitleTwo,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-verde-dark mt-10"> 
      <div className="flex flex-col items-center p-3 rounded-lg w-7/12 mt-0"> 
        <div className="mb-4">
          <Image src={image} alt={title} className="w-36 h-auto" />
        </div>
        <h2 className="text-lg font-semibold mb-4 text-blue-black dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-blue-dark font-sans dark:text-gray-400 mb-8">
          {subtitle}
        </p>
        <p className="bg-[#E0F2FE] rounded-lg p-4 text-sm text-center text-[#0BA5EC] dark:text-[#0BA5EC]" dangerouslySetInnerHTML={{ __html: subtitleTwo }} />
        <button
          className="bg-verde-unimed text-white py-2 px-4 rounded-lg mt-6"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default segViaCartao;
