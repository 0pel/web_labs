import { cn } from "@/lib/utils.ts"
import * as React from "react"

export default function Line({
    className,
    ...props
}: React.ComponentProps<"img">) {
    return (
        <img
            className={cn("relative top-0 left-0", className)}
            src="src/assets/img/gradient_line.svg"
            alt=""
            {...props}
        />
    )
}
