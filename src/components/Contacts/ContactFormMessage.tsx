import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

type Props = {
  type: "success" | "error";
  message: string;
};

export default function ContactFormMessage({ type, message }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-bg-secondary p-1.5 text-[#f5f5f5] sm:p-2",
          type === "error" ? "bg-error" : "bg-success",
        )}
      >
        {type === "error" ? (
          <X className="h-3.5  w-3.5 sm:h-5  sm:w-5" />
        ) : (
          <Check className="h-3.5  w-3.5 sm:h-5  sm:w-5" />
        )}
      </div>
      <span>{message}</span>
    </div>
  );
}
