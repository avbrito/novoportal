import React from "react";

interface PaperProps {
  className?: string;
}

export function Paper({ className }: PaperProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M7 13.5H13V15H7V13.5ZM7 10.5H13V12H7V10.5ZM11.5 3H5.5C4.675 3 4 3.675 4 4.5V16.5C4 17.325 4.6675 18 5.4925 18H14.5C15.325 18 16 17.325 16 16.5V7.5L11.5 3ZM14.5 16.5H5.5V4.5H10.75V8.25H14.5V16.5Z"
        fill="#101828"
        transform="translate(3, 1)"
      />
    </svg> 
  );
}
