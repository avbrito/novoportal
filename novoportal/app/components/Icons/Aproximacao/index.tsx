import React from "react";

interface AproximacaoProps {
  className?: string;
}

export function Aproximacao({ className }: AproximacaoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
    >
      <g clipPath="url(#clip0_7821_388)">
        <path
          d="M15.643 1.28564C17.5237 4.5432 18.5139 8.23843 18.5139 11.9999C18.5139 15.7614 17.5237 19.4567 15.643 22.7142M10.9287 3.64279C12.3957 6.18368 13.168 9.06596 13.168 11.9999C13.168 14.9339 12.3957 17.8162 10.9287 20.3571M6.42871 5.80707C7.48945 7.66388 8.04789 9.77016 8.04789 11.9142C8.04789 14.0583 7.48945 16.1646 6.42871 18.0214M1.92871 8.14279C2.69318 9.29976 3.09847 10.6362 3.09847 11.9999C3.09847 13.3637 2.69318 14.7001 1.92871 15.8571"
          stroke="white"
          strokeWidth="2.57143"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_7821_388">
          <rect
            width="20"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
