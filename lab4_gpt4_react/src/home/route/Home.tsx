import Hero from "../components/Hero.tsx"
import Brands from "../components/Brands.tsx"
import WhatIsChatGpt from "../components/WhatIsChatGpt.tsx"
import FutureHere from "../components/FutureHere.tsx"
import Header from "@/home/components/Header.tsx"
import { cn } from "@/lib/utils.ts"
import Feature from "@/home/components/Feature.tsx"
import Register from "@/home/components/Register.tsx"
import Blogs from "@/home/components/Blogs.tsx"
import Footer from "@/home/components/Footer.tsx"

export default function Home() {
    return (
        <>
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
                <Feature />
                <Register />
                <Blogs />
            </div>
            <Footer />
        </>
    )
}
