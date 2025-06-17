import React from "react";

interface PlayProps{
  className?: string;
}

export function Play({ className }: PlayProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-blue-black dark:text-gray-200"
    >
      <path
        d="M4.8 6.6H3V19.2C3 20.19 3.81 21 4.8 21H17.4V19.2H4.8V6.6ZM19.2 3H8.4C7.41 3 6.6 3.81 6.6 4.8V15.6C6.6 16.59 7.41 17.4 8.4 17.4H19.2C20.19 17.4 21 16.59 21 15.6V4.8C21 3.81 20.19 3 19.2 3ZM19.2 15.6H8.4V4.8H19.2V15.6ZM12 6.15V14.25L17.4 10.2L12 6.15Z"
        fill="currentColor"
      />
    </svg>
  );
}
