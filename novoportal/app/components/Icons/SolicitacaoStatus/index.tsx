import * as React from "react";

interface SolicitacaoStatusProps {
  className?: string;
}

export function SolicitacaoStatus({ className }: SolicitacaoStatusProps) {
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    className="text-blue-black dark:text-gray-200"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.2 3.6H3.6v12.8h9.6zM3.6 2A1.6 1.6 0 0 0 2 3.6v12.8a1.6 1.6 0 0 0 1.6 1.599h11.2v-14.4A1.6 1.6 0 0 0 13.2 2z"
      clipRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.6 17.2a.8.8 0 0 1 .8-.8h3.2a.8.8 0 0 1 0 1.6h-3.2a.8.8 0 0 1-.8-.8"
      clipRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="m8.052 9.292.348.316.348-.314.01-.009c.74-.673 1.33-1.209 1.681-1.726h-1.08c-.09 0-.172-.033-.213-.088l-.266-.355-.747.998c-.04.054-.122.088-.213.088s-.173-.034-.216-.088l-.413-.555h-.93c.352.519.944 1.055 1.688 1.73z"
    ></path>
    <path
      fill="currentColor"
      d="M6.173 7.238A1.6 1.6 0 0 1 6 6.525c0-.74.58-1.32 1.32-1.32.417 0 .818.194 1.08.501a1.44 1.44 0 0 1 1.08-.501c.739 0 1.32.58 1.32 1.32 0 .246-.06.48-.173.713H9.508l-.415-.554c-.081-.11-.348-.11-.43 0l-.743.998-.267-.355c-.04-.055-.122-.089-.213-.089z"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.201 11.602c0-.442.287-.8.64-.8h5.12c.353 0 .64.358.64.8 0 .441-.287.8-.64.8H5.84c-.353 0-.64-.359-.64-.8M5.201 13.997c0-.442.307-.8.686-.8h3.428c.379 0 .686.358.686.8s-.307.8-.686.8H5.887c-.379 0-.686-.358-.686-.8M13.2 11.6H18v4a2.4 2.4 0 0 1-4.8 0zm1.6 1.6v2.4a.8.8 0 1 0 1.6 0v-2.4z"
      clipRule="evenodd"
    ></path>
  </svg>
);
}

export default SolicitacaoStatus;
