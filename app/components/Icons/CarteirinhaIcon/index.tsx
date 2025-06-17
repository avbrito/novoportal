import React from "react";

interface CarteirinhaIconProps {
  className?: string;
}

export function CarteirinhaIcon({ className }: CarteirinhaIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M16 4H4C3.1675 4 2.5075 4.6675 2.5075 5.5L2.5 14.5C2.5 15.3325 3.1675 16 4 16H16C16.8325 16 17.5 15.3325 17.5 14.5V5.5C17.5 4.6675 16.8325 4 16 4ZM16 14.5H4V10H16V14.5ZM16 7H4V5.5H16V7Z"
        fill="currentColor"
      />
    </svg>
  );
}
