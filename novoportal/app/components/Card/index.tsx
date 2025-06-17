import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  redirect: { href: string };
}

const Card: React.FC<CardProps> = ({ icon, title, description, redirect }) => {
  return (
    <div className="bg-gray-card dark:bg-cinza-dark p-6 rounded-2xl border border-gray-unimed dark:border-gray-800 flex flex-col justify-between h-full">
      <div className="text-4xl mb-2 bg-gray-icon dark:bg-transparent rounded-md w-8 p-1">
        {icon}
      </div>
      <h3 className="text-xl text-blue-black dark:text-gray-300 font-sans mb-2">
        {title}
      </h3>
      <p className="text-sm text-blue-medium dark:text-gray-300 mt-2">
        {description}
      </p>
    </div>
  );
};

export default Card;
