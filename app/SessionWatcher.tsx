"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function SessionWatcher() {
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      const timer = setInterval(async () => {
        const res = await fetch("/api/auth/session");
        const data = await res.json();
        if (!data?.user) {
          signOut({ callbackUrl: "/Login" });
        }
      }, 30000); // 30 segundos

      return () => clearInterval(timer);
    }
  }, [status]);

  return null;
}
