import { PropsWithChildren } from "react";
import ThemeContextProvider from "./Theme";

export default function Providers({ children }: PropsWithChildren) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}

export { useTheme } from "./Theme";
