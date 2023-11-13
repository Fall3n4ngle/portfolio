"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
    React.PropsWithChildren
>(({ className, children, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "transition-all focus-visible:ring-ring focus-visible:ring-offset-background bg-bg-secondary peer inline-flex h-[28px] w-[52px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "bg-bg-primary pointer-events-none relative block h-6 w-6 rounded-full shadow-lg ring-0 transition-all data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0",
      )}
    >
      {children}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
