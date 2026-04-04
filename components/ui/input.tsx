"use strict";

import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

// Input follows minimalist rule: no full border, focus changes label/bar
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative group w-full">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full bg-surface-containerLow px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors focus-within:bg-surface-highest focus:border-l-2 focus:border-l-primaryContainer",
            className
          )}
          style={{ border: "none", borderLeft: "2px solid transparent" }}
          ref={ref}
          {...props}
        />
        {/* We can let developers manually add Labels above, but the input controls its focus styles via the focus-within selector */}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
