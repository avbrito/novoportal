import React from "react";

interface ExitProps {
  className?: string;
}

export function Exit({ className }: ExitProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M8.40833 12.9917L9.58333 14.1667L13.75 10L9.58333 5.83333L8.40833 7.00833L10.5583 9.16667H2.5V10.8333H10.5583L8.40833 12.9917ZM15.8333 2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V7.5H4.16667V4.16667H15.8333V15.8333H4.16667V12.5H2.5V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5Z"
        fill="#101828"
      />
    </svg>
  );
}
