import React from "react";

interface CartaoProps {
  className?: string;
}

export function Cartao({ className }: CartaoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-blue-black dark:text-gray-200"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.9998 10.0909H7.66642C7.3596 10.0909 7.11087 10.3351 7.11087 10.6364V19.3636C7.11087 19.6649 7.3596 19.9091 7.66642 19.9091H20.9998C21.3066 19.9091 21.5553 19.6649 21.5553 19.3636V10.6364C21.5553 10.3351 21.3066 10.0909 20.9998 10.0909ZM7.66642 9C6.74595 9 5.99976 9.73262 5.99976 10.6364V19.3636C5.99976 20.2674 6.74595 21 7.66642 21H20.9998C21.9202 21 22.6664 20.2674 22.6664 19.3636V10.6364C22.6664 9.73263 21.9202 9 20.9998 9H7.66642Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.19647 6.2675C2.3356 6.48939 1.82472 7.3406 2.05539 8.16872L4.28294 16.1658C4.37932 16.5118 4.58989 16.799 4.8652 17V9.37867C4.8652 8.52133 5.58769 7.82632 6.47894 7.82632H18.6667L17.6429 4.15096C17.4122 3.32283 16.5274 2.83138 15.6665 3.05328L3.19647 6.2675Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.667 13H6.66699V11H22.667V13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3333 17.3335C17.3333 16.7812 17.7596 16.3335 18.2856 16.3335L19.7142 16.3335C20.2402 16.3335 20.6666 16.7812 20.6666 17.3335C20.6666 17.8858 20.2402 18.3335 19.7142 18.3335L18.2856 18.3335C17.7596 18.3335 17.3333 17.8858 17.3333 17.3335Z"
        fill="currentColor"
      />
    </svg>
  );
}
