import React from "react";

interface PranchetaProps {
  className?: string;
}

export function Prancheta({ className }: PranchetaProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M7.49996 10.8333H8.14811L9.07404 9.58333L10.8333 12.5L11.9444 10.8334H12.5M6.66663 4.16666H5.83329C4.91282 4.16666 4.16663 4.91285 4.16663 5.83333V15.8333C4.16663 16.7538 4.91282 17.5 5.83329 17.5H14.1666C15.0871 17.5 15.8333 16.7538 15.8333 15.8333V5.83333C15.8333 4.91285 15.0871 4.16666 14.1666 4.16666H13.3333M6.66663 4.16666C6.66663 5.08714 7.41282 5.83333 8.33329 5.83333H11.6666C12.5871 5.83333 13.3333 5.08714 13.3333 4.16666M6.66663 4.16666C6.66663 3.24619 7.41282 2.5 8.33329 2.5H11.6666C12.5871 2.5 13.3333 3.24619 13.3333 4.16666"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
