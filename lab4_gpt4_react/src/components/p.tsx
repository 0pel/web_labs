import * as React from "react"
import { cn } from "@/lib/utils.ts"

export default function P({ className, ...props }: React.ComponentProps<"p">) {
    return <p className={cn("text-sm text-[#81afdd]", className)} {...props} />
}
