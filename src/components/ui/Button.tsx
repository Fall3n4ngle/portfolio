import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

const buttonVariants = cva(
  "flex items-center font-semibold whitespace-nowrap sm:text-lg active:translate-y-0.5 hover:scale-[1.04] transition-all px-5 py-2.5 rounded-2xl",
  {
    variants: {
      variant: {
        primary:
          "gap-2 border-2 bg-text-primary text-bg-primary",
        icon: "p-2.5 justify-center bg-bg-secondary rounded-full",
        secondary: "bg-bg-secondary gap-2"
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> &
  PropsWithChildren;

export default function Button({
  children,
  variant,
  className,
  ...props
}: Props) {
  return (
    <button {...props} className={cn(buttonVariants({ variant, className }))}>
      {children}
    </button>
  );
}
