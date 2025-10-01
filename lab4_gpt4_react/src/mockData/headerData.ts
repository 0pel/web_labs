import logoSvg from "../assets/img/logo.svg"
import type { Image, Link } from "@/lib/types.ts"

export type HeaderData = {
    logoData: HeaderLogoData
    menuData: HeaderMenuLink[]
    buttonsData: HeaderAuthButton[]
}

export type HeaderMenuLink = Link & { id: number }
export type HeaderAuthButton = HeaderMenuLink & { isPrimary: boolean }
export type HeaderLogoData = Image & { href: string }

export const menuData: HeaderMenuLink[] = [
    {
        id: 1,
        title: "Главная",
        href: "#",
    },
    {
        id: 2,
        title: "Что такое GPT?",
        href: "#",
    },
    {
        id: 3,
        title: "Open AI",
        href: "#",
    },
    {
        id: 4,
        title: "Кейсы",
        href: "#",
    },
    {
        id: 5,
        title: "Библиотека",
        href: "#",
    },
]

export const buttonsData: HeaderAuthButton[] = [
    {
        id: 1,
        title: "Войти",
        href: "#",
        isPrimary: false,
    },
    {
        id: 2,
        title: "Регистрация",
        href: "#",
        isPrimary: true,
    },
]

export const logoData: HeaderLogoData = {
    alt: "logo",
    src: logoSvg,
    href: "#",
}

const headerData: HeaderData = {
    logoData,
    menuData,
    buttonsData,
}

export default headerData
