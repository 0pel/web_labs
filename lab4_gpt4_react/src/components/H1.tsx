import * as React from "react"
import {cn} from "@/lib/utils.ts"

export default function H1({children, className, ...props}: React.ComponentProps<"h1">) {
    return (
        <h1 className={cn("text-[62px]", "bg-gradient-to-r from-[#AE67FA] to-[#F49867]", className)} {...props}>
            {children}
        </h1>
    )
}