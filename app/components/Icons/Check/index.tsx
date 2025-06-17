import React from "react";

interface CheckProps {
  className?: string; 
}

export function Check({ className }: CheckProps) {
  return (
    <svg
      className={className}  
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
    >
      <g clipPath="url(#clip0_5057_8084)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 11.3C8.65097 11.3 10.8 9.15097 10.8 6.5C10.8 3.84903 8.65097 1.7 6 1.7C3.34903 1.7 1.2 3.84903 1.2 6.5C1.2 9.15097 3.34903 11.3 6 11.3ZM6 12.5C9.31371 12.5 12 9.81371 12 6.5C12 3.18629 9.31371 0.5 6 0.5C2.68629 0.5 0 3.18629 0 6.5C0 9.81371 2.68629 12.5 6 12.5Z"
          fill="#00995C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.43864 4.29061C9.66474 4.53286 9.65165 4.91254 9.4094 5.13864L5.09467 9.16572L3.14446 6.89048C2.9288 6.63888 2.95794 6.2601 3.20954 6.04445C3.46113 5.8288 3.83991 5.85793 4.05556 6.10953L5.19107 7.43428L8.59062 4.26137C8.83287 4.03527 9.21254 4.04836 9.43864 4.29061Z"
          fill="#00995C"
        />
      </g>
      <defs>
        <clipPath id="clip0_5057_8084">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
