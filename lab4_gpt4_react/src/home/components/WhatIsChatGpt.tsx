import whatIsGptData, {
    type BlogPost,
    type BlogWithButton,
} from "@/mockData/whatIsGptData.ts"
import H3 from "@/components/ui/h3.tsx"
import P from "@/components/ui/p.tsx"
import H2 from "@/components/ui/h2.tsx"
import { cn } from "@/lib/utils.ts"
import Line from "@/components/GradientLine.tsx"
import Button from "@/components/ui/button.tsx"

type WhatIsGptTopProps = {
    data: BlogPost
}

function WhatIsGptTop({ data }: Readonly<WhatIsGptTopProps>) {
    const { header, content } = data
    return (
        <div
            className={cn(
                "flex flex-col lg:flex-row justify-between",
                "gap-10 lg:gap-32",
            )}
        >
            <H3>
                <Line />
                {header}
            </H3>
            <P className={"lg:max-w-2/3"}>{content}</P>
        </div>
    )
}

type WhatIsGptMiddleProps = {
    data: BlogWithButton
}

function WhatIsGptMiddle({ data }: Readonly<WhatIsGptMiddleProps>) {
    const {
        header,
        button: { href, title },
    } = data

    return (
        <div className={cn("flex justify-between items-center")}>
            <H2 className={cn("font-manrope-bold max-w-1/2")}>{header}</H2>
            <Button asChild variant="link" className={cn("text-tertiary")}>
                <a href={href}>{title}</a>
            </Button>
        </div>
    )
}

type WhatIsGptContainerProps = {
    item: BlogPost
}

function WhatIsGptContainer({ item }: Readonly<WhatIsGptContainerProps>) {
    const { header, content } = item

    return (
        <div className={cn("flex flex-col gap-6")}>
            <H3>
                <Line />
                {header}
            </H3>
            <P>{content}</P>
        </div>
    )
}

type WhatIsGptBottomProps = {
    data: BlogPost[]
}

function WhatIsGptBottom({ data }: Readonly<WhatIsGptBottomProps>) {
    return (
        <div className={cn("flex flex-row justify-between gap-2")}>
            {data.map((item) => (
                <WhatIsGptContainer key={item.id} item={item} />
            ))}
        </div>
    )
}

export default function WhatIsChatGpt() {
    const { whatIsGptTopData, whatIsGptMiddleData, whatIsGptBottomData } =
        whatIsGptData

    return (
        <section
            className={cn(
                "bg-[url(@/assets/img/what_is_gpt_3_bg.svg)] bg-cover p-8 lg:p-14",
                "flex flex-col justify-between gap-12",
            )}
        >
            <WhatIsGptTop data={whatIsGptTopData} />
            <WhatIsGptMiddle data={whatIsGptMiddleData} />
            <WhatIsGptBottom data={whatIsGptBottomData} />
        </section>
    )
}
