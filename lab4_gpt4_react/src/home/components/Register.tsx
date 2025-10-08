import { cn } from "@/lib/utils.ts"
import type { Link } from "@/lib/types.ts"
import Button from "@/components/ui/button.tsx"
import registerData from "@/mockData/registerData.ts"
import H3 from "@/components/ui/h3.tsx"
import P from "@/components/ui/p.tsx"

type ContentProps = {
    header: string
    title: string
}

function Content({ header, title }: Readonly<ContentProps>) {
    return (
        <div className={cn()}>
            <P className={cn("text-black text-xs")}>{header}</P>
            <H3 className={cn("text-black lg:max-w-4/5")}>{title}</H3>
        </div>
    )
}

type ButtonProps = {
    button: Link
}

function RegisterButton({ button }: Readonly<ButtonProps>) {
    return (
        <Button
            asChild
            className={cn(
                "bg-black hover:bg-accent rounded-[40px] h-[60px] w-[180px] text-lg",
            )}
            size="lg"
        >
            <a href={button.href}>{button.title}</a>
        </Button>
    )
}

export default function Register() {
    const { header, title, button } = registerData
    return (
        <section
            className={cn(
                "bg-gradient-to-r from-[#AE67FA] to-[#F49867] w-full",
                "rounded-[10px] flex flex-row justify-between items-center",
                "px-16 py-6",
            )}
        >
            <Content header={header} title={title} />
            <RegisterButton button={button} />
        </section>
    )
}
