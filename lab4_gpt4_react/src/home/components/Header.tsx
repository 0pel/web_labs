import Button from "@/components/ui/button.tsx"
import headerData, {
    type HeaderAuthButton,
    type HeaderData,
    type HeaderLogoData,
    type HeaderMenuLink,
} from "@/mockData/headerData.ts"
import { cn } from "@/lib/utils.ts"
import { Menu, X } from "lucide-react"
import useIsMobile from "@/home/hooks/UseIsMobile.ts"
import { useEffect, useState } from "react"

type ButtonProps = {
    button: HeaderAuthButton
    onClick?: () => void
}

export function LogInButton({ button, onClick }: Readonly<ButtonProps>) {
    return (
        <Button
            asChild
            variant="ghost"
            className={cn("rounded-[5px]", "h-12", "text-lg")}
            size="lg"
            onClick={onClick}
        >
            <a href={button.href}>{button.title}</a>
        </Button>
    )
}

export function SignUpButton({ button, onClick }: Readonly<ButtonProps>) {
    return (
        <Button
            asChild
            className={cn("rounded-[5px] h-12 hover:bg-accent text-lg")}
            size="lg"
            onClick={onClick}
        >
            <a href={button.href}>{button.title}</a>
        </Button>
    )
}

type LinkButtonProps = {
    link: HeaderMenuLink
    onClick?: () => void
}

export function LinkButton({ link, onClick }: Readonly<LinkButtonProps>) {
    return (
        <Button
            asChild
            variant="link"
            className={cn("text-foreground", "text-lg")}
            onClick={onClick}
        >
            <a href={link.href}>{link.title}</a>
        </Button>
    )
}

type MenuBarProps = {
    menu: HeaderMenuLink[]
    orientation?: "vertical" | "horizontal"
    onClick?: () => void
}

function MenuBar({
    menu,
    orientation = "horizontal",
    onClick,
}: Readonly<MenuBarProps>) {
    const buttons = menu.map((link) => (
        <LinkButton link={link} key={link.id} onClick={onClick} />
    ))

    return (
        <menu
            className={cn(
                "flex gap-x-[clamp(0.5rem,1.5vw,2.5rem)] gap-y-6",
                orientation === "vertical" ? "flex-col" : "flex-row",
            )}
        >
            {buttons}
        </menu>
    )
}

type LogoProps = {
    logo: HeaderLogoData
    onClick?: () => void
}

function Logo({ logo, onClick }: Readonly<LogoProps>) {
    return (
        <Button asChild variant="link" onClick={onClick}>
            <a href={logo.href}>
                <img src={logo.src} alt={logo.alt} />
            </a>
        </Button>
    )
}

type AuthButtonsProps = {
    buttons: HeaderAuthButton[]
    orientation?: "horizontal" | "vertical"
    onClick?: () => void
}

function AuthButtons({
    buttons,
    orientation = "horizontal",
    onClick,
}: Readonly<AuthButtonsProps>) {
    const authButtons = buttons.map((button) => {
        return button.isPrimary ? (
            <SignUpButton button={button} key={button.id} onClick={onClick} />
        ) : (
            <LogInButton button={button} key={button.id} onClick={onClick} />
        )
    })

    return (
        <menu
            className={cn(
                "flex gap-1",
                orientation === "vertical" ? "flex-col" : "flex-row",
            )}
        >
            {authButtons}
        </menu>
    )
}

type MenuProps = {
    data: HeaderData
}

function DesktopMenu({ data }: Readonly<MenuProps>) {
    return (
        <>
            <Logo logo={data.logoData} />
            <MenuBar menu={data.menuData} />
            <AuthButtons buttons={data.buttonsData} />
        </>
    )
}

function BurgerMenu({ data }: Readonly<MenuProps>) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false)
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscape)
            // Prevent body scroll when menu is open
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const toggleOpen = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <menu
            className={cn(
                "w-full flex flex-col justify-center items-center gap-1",
            )}
        >
            <div
                className={cn("flex items-center w-full justify-between z-50")}
            >
                <Logo logo={data.logoData} />
                <Button
                    asChild
                    variant="ghost"
                    className={cn("hover:bg-accent/50")}
                    size="icon"
                    onClick={toggleOpen}
                >
                    {isOpen ? <X /> : <Menu />}
                </Button>
            </div>
            <div
                className={cn(
                    "z-40 transition-all duration-300 ease-in-out overflow-auto overscroll-contain pb-6",
                    "fixed inset-0 top-16 left-0 right-0 bottom-0 bg-background",
                    "flex flex-col items-center gap-6",
                    isOpen ? "" : "hidden",
                )}
            >
                <MenuBar
                    menu={data.menuData}
                    orientation="vertical"
                    onClick={closeMenu}
                />
                <AuthButtons
                    buttons={data.buttonsData}
                    orientation="horizontal"
                    onClick={closeMenu}
                />
            </div>
        </menu>
    )
}

export default function Header() {
    const isMobile = useIsMobile()
    const Menu = isMobile ? BurgerMenu : DesktopMenu

    return (
        <header
            className={cn(
                "flex w-full flex-col lg:flex-row",
                "sticky",
                "top-0",
                "bg-background",
                "py-4",
                "items-center justify-between",
            )}
        >
            <Menu data={headerData} />
        </header>
    )
}
