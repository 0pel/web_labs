import heroData, {
    type HeroButton,
    type HeroIllustration,
} from "@/mockData/heroData.ts"
import H1 from "@/components/h1.tsx"
import Input from "@/components/ui/input.tsx"
import Button from "@/components/ui/button.tsx"
import { cn } from "@/lib/utils.ts"
import P from "@/components/p.tsx"

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
    illustration: HeroIllustration
}

function Illustration({ illustration }: Readonly<IllustrationProps>) {
    const { alt, src } = illustration
    return <img src={src} alt={alt} />
}

export default function Hero() {
    const { header, description, illustration, heroButtons } = heroData

    return (
        <section className={cn("flex flex-col lg:flex-row")}>
            <div
                className={cn(
                    "flex flex-col text-center lg:text-left items-center lg:w-7/10 lg:items-stretch gap-8",
                )}
            >
                <Header header={header} />
                <Description description={description} />
                <Buttons buttons={heroButtons} />
            </div>
            <div className={cn("flex justify-center")}>
                <Illustration illustration={illustration} />
            </div>
        </section>
    )
}
