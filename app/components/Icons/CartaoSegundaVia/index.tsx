import React from "react";

interface CartaoSegundaViaProps {
  className?: string;
}

export function CartaoSegundaVia({ className }: CartaoSegundaViaProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.1364 3.86377H3.86364C3.11364 3.86377 2.5 4.47741 2.5 5.22741V14.7729C2.5 15.5229 3.11364 16.1365 3.86364 16.1365H16.1364C16.8864 16.1365 17.5 15.5229 17.5 14.7729V5.22741C17.5 4.47741 16.8864 3.86377 16.1364 3.86377ZM16.1364 14.7729H3.86364V5.22741H16.1364V14.7729ZM5.22727 8.6365H11.3636V10.0001H5.22727V8.6365ZM5.22727 6.59104H11.3636V7.95468H5.22727V6.59104Z"
        fill="#101828"
      />
    </svg>
  );
}
