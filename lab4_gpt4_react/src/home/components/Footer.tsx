import footerData, {
    type FooterLink,
    type Info,
    type Links,
} from "@/mockData/footerData.ts"
import type { Link } from "@/lib/types.ts"
import { cn } from "@/lib/utils.ts"
import H1 from "@/components/ui/h1.tsx"
import Button from "@/components/ui/button.tsx"
import P from "@/components/ui/p.tsx"

type HeaderProps = {
    header: string
    button: Link
}

function Header({ header, button }: Readonly<HeaderProps>) {
    return (
        <div
            className={cn(
                "flex flex-col items-center text-center",
                "gap-8 sm:gap-12 lg:gap-16",
                "w-full max-w-4xl mx-auto",
                "px-4 sm:px-6 lg:px-8",
            )}
        >
            <H1
                className={cn(
                    "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl",
                    "leading-tight",
                )}
            >
                {header}
            </H1>
            <Button
                asChild
                className={cn(
                    "bg-transparent hover:bg-accent",
                    "rounded-none border border-white",
                    "text-sm sm:text-base lg:text-lg",
                    "py-4 px-6 sm:py-6 sm:px-10 lg:py-8 lg:px-12",
                    "w-full sm:w-auto",
                    "transition-all duration-300",
                )}
                size="lg"
            >
                <a href={button.href}>{button.title}</a>
            </Button>
        </div>
    )
}

type LinkContainerProps = {
    title: string
    links: FooterLink[]
}

function LinkContainer({ title, links }: Readonly<LinkContainerProps>) {
    return (
        <div className={cn("flex flex-col gap-3 sm:gap-4 items-start")}>
            <P
                className={cn(
                    "text-foreground font-semibold",
                    "text-base sm:text-lg",
                )}
            >
                {title}
            </P>
            <div className={cn("flex flex-col gap-2 sm:gap-3 items-start")}>
                {links.map((link) => (
                    <Button
                        asChild
                        className={cn(
                            "px-0 text-foreground/80 hover:text-foreground",
                            "text-xs sm:text-sm",
                            "h-auto py-1",
                            "transition-colors duration-200",
                        )}
                        variant="link"
                        size="sm"
                        key={link.id}
                    >
                        <a
                            className={cn("whitespace-pre-wrap text-left")}
                            href={link.href}
                        >
                            {link.title}
                        </a>
                    </Button>
                ))}
            </div>
        </div>
    )
}

type LinksProps = {
    links: Links
}

function Links({ links }: Readonly<LinksProps>) {
    return (
        <div
            className={cn(
                "flex flex-col sm:flex-row",
                "gap-8 sm:gap-12 lg:gap-16",
                "w-full",
                "justify-start sm:justify-around",
            )}
        >
            <LinkContainer title="Ссылки" links={links.links} />
            <LinkContainer title="Компания" links={links.company} />
            <LinkContainer title="Контакты" links={links.contacts} />
        </div>
    )
}

type InfoProps = {
    info: Info
}

function Info({ info }: Readonly<InfoProps>) {
    const { image, address, bottom } = info
    return (
        <div
            className={cn(
                "flex flex-col gap-4 sm:gap-6",
                "items-center sm:items-start",
                "text-center sm:text-left",
                "w-full sm:max-w-xs",
            )}
        >
            <img
                className={cn("w-20 sm:w-24 lg:w-28")}
                src={image.src}
                alt={image.alt}
            />
            <P className={cn("text-sm sm:text-base text-foreground/70")}>
                {address}
            </P>
            <P className={cn("text-xs sm:text-sm text-foreground/70")}>
                {bottom}
            </P>
        </div>
    )
}

export default function Footer() {
    const { header, button, links, info } = footerData

    return (
        <footer
            className={cn(
                "bg-[#031B34] w-full",
                "flex flex-col items-center",
                "pt-16 sm:pt-24 lg:pt-32 xl:pt-48",
                "mt-20 sm:mt-32 lg:mt-40",
                "gap-12 sm:gap-16 lg:gap-20 xl:gap-45",
                "pb-8 sm:pb-12 lg:pb-16",
            )}
        >
            <Header header={header} button={button} />

            <div
                className={cn(
                    "flex flex-col lg:flex-row",
                    "gap-12 sm:gap-16 lg:gap-20 xl:gap-40",
                    "w-full max-w-7xl",
                    "px-4 sm:px-6 lg:px-8",
                    "items-center lg:items-start",
                )}
            >
                <Info info={info} />
                <Links links={links} />
            </div>

            {/* Bottom border */}
            <div
                className={cn(
                    "w-full max-w-7xl border-t border-white/20",
                    "pt-8 sm:pt-12",
                    "px-4 sm:px-6 lg:px-8",
                )}
            >
                <P
                    className={cn(
                        "text-center text-xs sm:text-sm",
                        "text-foreground/60",
                    )}
                >
                    © {new Date().getFullYear()} Все права защищены.
                </P>
            </div>
        </footer>
    )
}
