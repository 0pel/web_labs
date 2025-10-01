import featureData, { type FeatureData } from "@/mockData/feature.ts"
import Button from "@/components/ui/button.tsx"
import { cn } from "@/lib/utils"
import H2 from "@/components/h2.tsx"
import P from "@/components/p.tsx"
import type { Link } from "@/lib/types.ts"

type LinkProps = {
    link: Link
}

function Link({ link }: Readonly<LinkProps>) {
    return (
        <Button
            asChild
            variant="link"
            className={cn("text-tertiary px-0")}
            size="sm"
        >
            <a href={link.href}>{link.title}</a>
        </Button>
    )
}

type ContentProps = {
    data: FeatureData
}

function Content({ data }: Readonly<ContentProps>) {
    const { header, title, text, link } = data
    return (
        <div
            className={cn(
                "flex flex-col items-start gap-6",
                "justify-end py-6",
            )}
        >
            <P>{header}</P>
            <H2 className={cn("font-manrope-bold")}>{title}</H2>
            <P>{text}</P>
            <Link link={link} />
        </div>
    )
}

export default function Feature() {
    const { image } = featureData
    return (
        <section className={cn("flex flex-row gap-8 px-10")}>
            <img
                src={image.src}
                alt={image.alt}
                className={"max-w-1/2 h-auto"}
            />
            <Content data={featureData} />
        </section>
    )
}
