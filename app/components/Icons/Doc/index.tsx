import React from "react";

interface DocProps {
  className?: string;
}

export function Doc({ className }: DocProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M7 13H13V14.5H7V13ZM7 10H13V11.5H7V10ZM11.5 2.5H5.5C4.675 2.5 4 3.175 4 4V16C4 16.825 4.6675 17.5 5.4925 17.5H14.5C15.325 17.5 16 16.825 16 16V7L11.5 2.5ZM14.5 16H5.5V4H10.75V7.75H14.5V16Z"
        fill="#101828"
      />
    </svg>
  );
}
