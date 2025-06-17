import React from "react";

interface DocAnexoProps {
  className?: string;
}

export function DocAnexo({ className }: DocAnexoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
    >
      <path
        d="M18.4004 4.5H8.80039C7.48039 4.5 6.41239 5.58 6.41239 6.9L6.40039 26.1C6.40039 27.42 7.46839 28.5 8.78839 28.5H23.2004C24.5204 28.5 25.6004 27.42 25.6004 26.1V11.7L18.4004 4.5ZM8.80039 26.1V6.9H17.2004V12.9H23.2004V26.1H8.80039Z"
        fill="#475467"
      />
    </svg>
  );
}
