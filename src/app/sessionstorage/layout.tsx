"use client";

import { ValueProvider } from "@/contexts/useValueContext";

export default function SessionStorageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("SessionStorageLayout");
  return <ValueProvider>{children}</ValueProvider>;
}
