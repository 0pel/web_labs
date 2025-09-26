import * as React from "react"
import {cn} from "@/lib/utils.ts"

export default function H2({children, className, ...props}: React.ComponentProps<"h2">) {
    return (
        <h2 className={cn("text-[34px]", "bg-gradient-to-r from-[#AE67FA] to-[#F49867]", className)} {...props}>
            {children}
        </h2>
    )
}