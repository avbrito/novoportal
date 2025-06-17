import React from "react";

interface GraficoProps {
  className?: string;
}

export function Grafico({ className }: GraficoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-blue-black dark:text-gray-200"
    >
      <path
        d="M3 8.4H6.85714V21H3V8.4ZM10.2 3H13.8V21H10.2V3ZM17.4 13.2857H21V21H17.4V13.2857Z"
        fill="currentColor"
      />
    </svg>
  );
}
