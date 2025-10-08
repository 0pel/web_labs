import heroData, { type HeroButton } from "@/mockData/heroData.ts"
import H1 from "@/components/ui/h1.tsx"
import Input from "@/components/ui/input.tsx"
import Button from "@/components/ui/button.tsx"
import { cn } from "@/lib/utils.ts"
import P from "@/components/ui/p.tsx"
import type { Image } from "@/lib/types.ts"

type HeaderProps = {
    header: string
}

function Header({ header }: Readonly<HeaderProps>) {
    return <H1>{header}</H1>
}

type DescriptionProps = {
    description: string
}

function Description({ description }: Readonly<DescriptionProps>) {
    return <P className={cn("w-9/10 text-xl")}>{description}</P>
}

type ButtonProps = {
    button: HeroButton
}

function HeroButton({ button }: Readonly<ButtonProps>) {
    const { type, title } = button
    switch (type) {
        case "email":
            return (
                <Input
                    className={cn(
                        "placeholder:text-secondary-foreground",
                        "placeholder:text-xl text-xl",
                        "bg-secondary border-none focus-visible:ring-0",
                        "rounded-l-[5px] rounded-r-none",
                        "h-[72px] min-w-xs pl-8",
                    )}
                    type="email"
                    name={title}
                    autoComplete="on"
                    placeholder={title}
                />
            )
        case "button":
            return (
                <Button
                    className={cn(
                        "hover:bg-accent",
                        "rounded-l-none rounded-r-[5px]",
                        "h-[72px] w-[128px] text-xl",
                    )}
                    size="lg"
                >
                    {title}
                </Button>
            )
    }
}

type ButtonsProps = {
    buttons: HeroButton[]
}

function Buttons({ buttons }: Readonly<ButtonsProps>) {
    return (
        <div className={cn("flex flex-row")}>
            {buttons.map((ctaButton) => (
                <HeroButton key={ctaButton.id} button={ctaButton} />
            ))}
        </div>
    )
}

type IllustrationProps = {
    illustration: Image
}

function Illustration({ illustration }: Readonly<IllustrationProps>) {
    const { alt, src } = illustration
    return <img src={src} alt={alt} />
}

export default function Hero() {
    const { header, description, illustration, heroButtons } = heroData

    return (
        <section
            className={cn(
                "flex flex-col lg:flex-row",
                "items-center lg:items-start",
                "gap-8 lg:gap-12",
                "px-4 sm:px-6 lg:px-8 py-8 lg:py-12",
            )}
        >
            <div
                className={cn(
                    "flex flex-col",
                    "text-center lg:text-left",
                    "items-center lg:items-start",
                    "lg:flex-1 gap-6 lg:gap-8",
                )}
            >
                <Header header={header} />
                <Description description={description} />
                <div className={cn("w-full max-w-md lg:max-w-none")}>
                    <Buttons buttons={heroButtons} />
                </div>
            </div>
            <div
                className={cn(
                    "flex justify-center lg:flex-1",
                    "w-full lg:w-auto",
                )}
            >
                <Illustration illustration={illustration} />
            </div>
        </section>
    )
}
