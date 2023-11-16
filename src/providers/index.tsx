"use client";

import { PropsWithChildren } from "react";
import ThemeContextProvider from "./Theme";
import { Toaster } from "./Toaster";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeContextProvider>
      <Toaster/>
      {children}
    </ThemeContextProvider>
  );
}

export { useTheme } from "./Theme";
