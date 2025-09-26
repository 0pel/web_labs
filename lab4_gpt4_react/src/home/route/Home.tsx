import Hero from "../components/Hero.tsx"
import Brands from "../components/Brands.tsx"
import WhatIsChatGpt from "../components/WhatIsChatGpt.tsx"
import FutureHere from "../components/FutureHere.tsx"
import Header from "@/home/components/Header.tsx"
import { cn } from "@/lib/utils.ts"

export default function Home() {
    return (
        <div
            className={cn(
                "flex flex-col items-center max-w-[1224px] mx-auto px-4 gap-20",
            )}
        >
            <Header />
            <Hero />
            <Brands />
            <WhatIsChatGpt />
            <FutureHere />
        </div>
    )
}
