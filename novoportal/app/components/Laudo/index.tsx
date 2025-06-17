import React from "react";

interface LaudoProps {
  className?: string;
}

export function Laudo({ className }: LaudoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
    >
      <path
        d="M9.2002 4H4.4002C3.7402 4 3.2002 4.54 3.2002 5.2V14.8C3.2002 15.46 3.7342 16 4.3942 16H11.6002C12.2602 16 12.8002 15.46 12.8002 14.8V7.6L9.2002 4ZM11.6002 14.8H4.4002V5.2H8.6002V8.2H11.6002V14.8Z"
        fill="#0066FF"
      />
    </svg>
  );
}
