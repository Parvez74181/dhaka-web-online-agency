import { cn } from "@/lib/utils";
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full border rounded-full px-3 py-2 text-sm shadow-sm shadow-black/5 transition-shadow  focus-visible:outline-none focus-visible:ring-[3px] 0 disabled:cursor-not-allowed disabled:opacity-50 border-neutral-800 bg-neutral-950 text-neutral-50 placeholder:text-neutral-400/70 focus-visible:border-neutral-300 focus-visible:ring-neutral-300/20",
          type === "search" &&
            "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
          type === "file" &&
            "p-0 pr-3 italic  file:me-3 file:h-full file:border-0 file:border-r file:border-solid  file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic  text-neutral-400/70 file:border-neutral-800 file:text-neutral-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
