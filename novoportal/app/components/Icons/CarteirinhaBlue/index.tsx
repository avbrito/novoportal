import React from "react";

interface CarteirinhaBlueProps {
  className?: string;
}

export function CarteirinhaBlue({ className }: CarteirinhaBlueProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="mr-[5px]"
    >
      <path
        d="M19.2 4.79999H4.8C3.801 4.79999 3.009 5.60099 3.009 6.59999L3 17.4C3 18.399 3.801 19.2 4.8 19.2H19.2C20.199 19.2 21 18.399 21 17.4V6.59999C21 5.60099 20.199 4.79999 19.2 4.79999ZM19.2 17.4H4.8V12H19.2V17.4ZM19.2 8.39999H4.8V6.59999H19.2V8.39999Z"
        fill="#0066FF"
      />
    </svg>
  );
}
