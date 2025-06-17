import React from "react";

interface ExtratoProps {
  className?: string;
}

export function Extrato({ className }: ExtratoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M7.50008 6.66667L11.6667 6.66667M7.50008 10H10.8334M7.50008 13.3333H8.33341M5.83341 2.5H14.1667C15.0872 2.5 15.8334 3.24619 15.8334 4.16667V12.5C15.8334 15.2614 13.5948 17.5 10.8334 17.5H5.83341C4.91294 17.5 4.16675 16.7538 4.16675 15.8333V4.16667C4.16675 3.24619 4.91294 2.5 5.83341 2.5Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
