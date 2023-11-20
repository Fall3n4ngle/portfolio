"use client";

import { PropsWithChildren } from "react";
import ThemeContextProvider from "./Theme";
import { Toaster } from "./Toaster";
import ActiveSectionContextProvider from "./ActiveSection";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeContextProvider>
      <Toaster />
      <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}

export { useTheme } from "./Theme";
export { useActiveSection } from "./ActiveSection"