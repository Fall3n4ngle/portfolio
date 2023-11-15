import { PropsWithChildren } from "react";

export default function Badge({ children }: PropsWithChildren) {
  return <div className="bg-bg-secondary rounded-md px-2 py-1">{children}</div>;
}
