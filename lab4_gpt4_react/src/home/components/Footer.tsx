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
                "flex flex-col items-center lg:w-4xl text-center gap-16",
            )}
        >
            <H1>{header}</H1>
            <Button
                asChild
                className={cn(
                    "bg-transparent hover:bg-accent",
                    "rounded-none border border-white",
                    "text-lg py-8 px-12",
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
        <div className={cn("flex flex-col gap-4 items-start")}>
            <P className={cn("text-foreground")}>{title}</P>
            {links.map((link) => {
                return (
                    <Button
                        asChild
                        className={cn("px-0 text-foreground")}
                        variant="link"
                        size="sm"
                        key={link.id}
                    >
                        <a
                            className={cn("whitespace-pre-wrap")}
                            href={link.href}
                        >
                            {link.title}
                        </a>
                    </Button>
                )
            })}
        </div>
    )
}

type LinksProps = {
    links: Links
}

function Links({ links }: Readonly<LinksProps>) {
    return (
        <div className={cn("flex flex-row justify-around w-full")}>
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
        <div className={"flex flex-col gap-6 max-w-1/5"}>
            <img className={"w-28"} src={image.src} alt={image.alt} />
            <P>{address}</P>
            <P>{bottom}</P>
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
                "pt-48 mt-40 gap-45",
            )}
        >
            <Header header={header} button={button} />
            <div className={cn("flex flex-row md:justify-around gap-40")}>
                <Info info={info} />
                <Links links={links} />
            </div>
        </footer>
    )
}
