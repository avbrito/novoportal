import React from "react";

interface CarteirinhaProps {
  className?: string;
}

export function Carteirinha({ className }: CarteirinhaProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.8 3.19995H3.2C2.534 3.19995 2.006 3.73395 2.006 4.39995L2 11.6C2 12.266 2.534 12.8 3.2 12.8H12.8C13.466 12.8 14 12.266 14 11.6V4.39995C14 3.73395 13.466 3.19995 12.8 3.19995ZM12.8 11.6H3.2V7.99995H12.8V11.6ZM12.8 5.59995H3.2V4.39995H12.8V5.59995Z"
        fill="#101828"
      />
    </svg>
  );
}
