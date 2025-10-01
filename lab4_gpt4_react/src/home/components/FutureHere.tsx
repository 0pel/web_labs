import futureHereData, {
    type FutureHerePost,
} from "@/mockData/futureHereData.ts"
import H2 from "@/components/ui/h2.tsx"
import H3 from "@/components/ui/h3.tsx"
import P from "@/components/ui/p.tsx"
import { cn } from "@/lib/utils.ts"
import Line from "@/components/GradientLine.tsx"
import Button from "@/components/ui/button.tsx"

type RightContainerProps = {
    item: FutureHerePost
}

function RightContainer({ item }: Readonly<RightContainerProps>) {
    const { title, description } = item

    return (
        <div className={cn("flex flex-row justify-between")}>
            <H3 className={cn("max-w-2/5")}>
                <Line />
                {title}
            </H3>
            <P className={cn("max-w-1/2 text-sm")}>{description}</P>
        </div>
    )
}

export default function FutureHere() {
    return (
        <section className={cn("flex flex-row justify-between gap-18")}>
            <div className={cn("flex flex-col gap-8 items-start")}>
                <H2 className={cn("font-manrope-bold")}>
                    Будущее Уже Наступило и Тебе Нужно Лишь Осознать. Шагни в
                    Будущее и Воплоти Его.
                </H2>
                <Button
                    asChild
                    variant="link"
                    className={cn("text-tertiary px-0")}
                    size="sm"
                >
                    <a href="/future-here">Запросить ранний доступ</a>
                </Button>
            </div>
            <div className={cn("flex flex-col gap-5")}>
                {futureHereData.map((item) => (
                    <RightContainer key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}
