import React from "react";

interface NotificationBellProps {
  className?: string;
}

export function NotificationBell({ className }: NotificationBellProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 17.5C10.8462 17.5 11.5385 16.8077 11.5385 15.9615H8.46158C8.46158 16.8077 9.15388 17.5 10 17.5ZM14.6154 12.8846V9.03846C14.6154 6.67692 13.3616 4.7 11.1539 4.17692V3.65385C11.1539 3.01538 10.6385 2.5 10 2.5C9.36158 2.5 8.84619 3.01538 8.84619 3.65385V4.17692C6.64619 4.7 5.38465 6.66923 5.38465 9.03846V12.8846L3.84619 14.4231V15.1923H16.1539V14.4231L14.6154 12.8846ZM13.077 13.6538H6.92311V9.03846C6.92311 7.13077 8.08465 5.57692 10 5.57692C11.9154 5.57692 13.077 7.13077 13.077 9.03846V13.6538Z"
        fill="#101828"
      />
    </svg>
  );
}
