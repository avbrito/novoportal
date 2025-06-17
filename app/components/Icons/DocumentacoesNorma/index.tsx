import * as React from "react";

interface DocumentacoesNormaProps {
  className?: string;
}

export function DocumentacoesNorma({ className }: DocumentacoesNormaProps){
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="18"
    fill="none"
    viewBox="0 0 14 18"
    className="text-blue-black dark:text-gray-200"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.5 5.667h4.166M4.5 9h3.333M4.5 12.333h.833M2.833 1.5h8.334c.92 0 1.666.746 1.666 1.667V11.5a5 5 0 0 1-5 5h-5c-.92 0-1.666-.746-1.666-1.667V3.167c0-.92.746-1.667 1.666-1.667"
    ></path>
  </svg>
);
}

export default DocumentacoesNorma;
