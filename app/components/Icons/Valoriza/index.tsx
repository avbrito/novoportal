import React from "react";

interface ValorizaProps {
  className?: string;
}

export function Valoriza({ className }: ValorizaProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4.63335 10.832H3.4296C3.4296 10.832 3.33185 13.2395 5.18379 15.3693C7.03574 17.499 10.0965 17.499 10.0965 17.499V16.3878C7.49869 16.2952 4.63335 14.6285 4.63335 10.832Z"
        fill="#101828"
      />
      <mask
        id="mask0_3429_34591"
        maskUnits="userSpaceOnUse"
        x="4"
        y="2"
        width="12"
        height="10"
      >
        <rect
          x="4.92822"
          y="2.49854"
          width="10.5004"
          height="9.00036"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_3429_34591)">
        <path
          d="M5.74266 9.35095H5.09448L6.76122 7.49902L8.42795 9.35095H7.77978V14.5363H5.74266V9.35095Z"
          fill="#101828"
        />
        <path
          d="M9.07566 7.0365H8.42749L10.0942 5.18457L11.761 7.0365H11.1128V14.5368H9.07566V7.0365Z"
          fill="#101828"
        />
        <path
          d="M12.4098 4.35046H11.7616L13.4283 2.49854L15.0951 4.35046H14.4469V14.5361H12.4098V4.35046Z"
          fill="#101828"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0905 4.53662C10.4707 4.53662 10.8432 4.56935 11.2054 4.63213V5.05596C10.7876 4.95924 10.3524 4.90812 9.90523 4.90812C7.21905 4.90812 4.96377 6.75296 4.33726 9.24474H3.85442C4.62583 6.52717 7.12571 4.53662 10.0905 4.53662ZM3.60938 10.9279C3.60897 10.958 3.60876 10.9882 3.60876 11.0184C3.60876 14.5981 6.51074 17.5001 10.0905 17.5001C13.6703 17.5001 16.5723 14.5981 16.5723 11.0184C16.5723 9.65257 16.1498 8.38543 15.4285 7.34049V9.07768C15.5703 9.57709 15.6462 10.1042 15.6462 10.6491C15.6462 13.8197 13.0759 16.3901 9.90523 16.3901C6.82805 16.3901 4.31634 13.9691 4.17091 10.9279H3.60938Z"
        fill="#101828"
      />
      <mask
        id="mask1_3429_34591"
        maskUnits="userSpaceOnUse"
        x="6"
        y="6"
        width="9"
        height="10"
      >
        <circle cx="10.3885" cy="10.9093" r="4.36588" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask1_3429_34591)">
        <path
          d="M5.65125 14.3496H14.5405V14.7337L10.1885 16.9423L5.65125 14.7337V14.3496Z"
          fill="#101828"
        />
        <path
          d="M5.74388 9.35046H5.0957L6.76244 7.49854L8.42917 9.35046H7.781V14.5359H5.74388V9.35046Z"
          fill="#101828"
        />
        <path
          d="M9.07689 7.03601H8.42871L10.0954 5.18408L11.7622 7.03601H11.114V14.5363H9.07689V7.03601Z"
          fill="#101828"
        />
        <path
          d="M12.411 4.34997H11.7628L13.4296 2.49805L15.0963 4.34997H14.4481V14.5356H12.411V4.34997Z"
          fill="#101828"
        />
      </g>
    </svg>
  );
}
