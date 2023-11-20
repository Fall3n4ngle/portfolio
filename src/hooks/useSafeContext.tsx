import { Context, useContext } from "react";

export function useSafeContext<ContextType>(
  Context: Context<ContextType>,
  errorMessage: string,
) {
  const value = useContext(Context);

  if (!value) {
    throw new Error(errorMessage);
  }

  return value;
}
