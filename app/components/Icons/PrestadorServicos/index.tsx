import * as React from "react";

interface PrestadorServicosProps {
  className?: string;
}

export function PrestadorServicos({ className }: PrestadorServicosProps){
  return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    className="text-blue-black dark:text-gray-200"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.375 1.106a.9.9 0 0 1 .475.794v1.35a.9.9 0 0 1-1.75.298l-.148.1a1.8 1.8 0 0 0-.802 1.497V8.2a2.7 2.7 0 0 0 2.7 2.7h3.6a2.7 2.7 0 0 0 2.7-2.7V5.145a1.8 1.8 0 0 0-.801-1.498l-.15-.099a.9.9 0 0 1-1.749-.298V1.9a.9.9 0 0 1 1.4-.749l1.497.999a3.6 3.6 0 0 1 1.603 2.995V8.2a4.5 4.5 0 0 1-4.5 4.5h-.9v4.5h1.8v-1.473a1.8 1.8 0 0 1 1.8-1.8h.187a2.25 2.25 0 1 1 0 1.8h-.187V17.2a1.8 1.8 0 0 1-1.8 1.8h-1.8a1.8 1.8 0 0 1-1.8-1.8v-4.5h-.9a4.5 4.5 0 0 1-4.5-4.5V5.145A3.6 3.6 0 0 1 3.953 2.15l1.498-.999a.9.9 0 0 1 .924-.045m9.025 13.27a.45.45 0 1 0 0 .902.45.45 0 0 0 0-.901"
      clipRule="evenodd"
    ></path>
  </svg>
  )
};

export default PrestadorServicos;
