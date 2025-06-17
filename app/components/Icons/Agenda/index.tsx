import React from "react";

interface AgendaProps {
  className?: string;
}

export function Agenda({ className }: AgendaProps) {
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
        d="M17.4 3H6.60005C5.61005 3 4.80005 3.81 4.80005 4.8V19.2C4.80005 20.19 5.61005 21 6.60005 21H17.4C18.39 21 19.2 20.19 19.2 19.2V4.8C19.2 3.81 18.39 3 17.4 3ZM9.30005 4.8H11.1V9.3L10.2 8.625L9.30005 9.3V4.8ZM17.4 19.2H6.60005V4.8H7.50005V12.9L10.2 10.875L12.9 12.9V4.8H17.4V19.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
