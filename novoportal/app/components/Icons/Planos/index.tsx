import React from "react";

interface PlanosProps {
  className?: string;
}

export function Planos({ className }: PlanosProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M2.5 6.25H5.5V13.75H2.5V6.25ZM6.25 15.25H13.75V4.75H6.25V15.25ZM7.75 6.25H12.25V13.75H7.75V6.25ZM14.5 6.25H17.5V13.75H14.5V6.25Z"
        fill="black"
      />
    </svg>
  );
}
