"use client";

import { SessionProvider } from "next-auth/react";
import { UserProvider } from "./UserContext";
import SessionWatcher from "./SessionWatcher";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <UserProvider>
      <SessionWatcher />
        {children}
      </UserProvider>
    </SessionProvider>
  );
}
