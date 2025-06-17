import React from "react";
import "./globals.css"; 
import { Metadata } from "next";
import { Providers } from "./providers"; // <== import Providers wrapper

export const metadata: Metadata = {
  title: "Portal Unimed Uberlândia",
  description: "Novo Portal Unimed Uberlândia",
  icons: {
    icon: "/favicon.ico",  
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body suppressHydrationWarning className={`UnimedSans2020 antialiased`}>
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
