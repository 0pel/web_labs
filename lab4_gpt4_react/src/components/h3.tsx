import * as React from "react"
import { cn } from "@/lib/utils.ts"

export default function H3({
    className,
    children,
    ...props
}: React.ComponentProps<"h3">) {
    return (
        <h3
            className={cn(
                "text-lg text-foreground font-manrope-bold",
                className,
            )}
            {...props}
        >
            {children}
        </h3>
    )
}
