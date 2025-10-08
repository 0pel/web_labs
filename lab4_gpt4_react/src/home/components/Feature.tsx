import featureData, { type FeatureData } from "@/mockData/featureData.ts"
import Button from "@/components/ui/button.tsx"
import { cn } from "@/lib/utils.ts"
import H2 from "@/components/ui/h2.tsx"
import P from "@/components/ui/p.tsx"
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
        <section
            className={cn(
                "flex flex-col lg:flex-row gap-6 lg:gap-8",
                "px-4 sm:px-6 lg:px-10 py-8 lg:py-12",
            )}
        >
            <img
                src={image.src}
                alt={image.alt}
                className={cn(
                    "w-full lg:max-w-1/2 h-auto",
                    "object-cover rounded-lg",
                )}
            />
            <Content data={featureData} />
        </section>
    )
}
