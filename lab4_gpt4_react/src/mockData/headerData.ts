import logoSvg from "../assets/img/logo.svg"

export type HeaderData = {
    logoData: HeaderLogoData,
    menuData: HeaderMenuLink[],
    buttonsData: HeaderAuthButton[],
}

export type HeaderMenuLink = {
    id: number
    title: string,
    href: string
}
export type HeaderAuthButton = {
    id: number,
    title: string,
    href: string,
    isPrimary: boolean
}

export type HeaderLogoData = {
    alt: string,
    src: string,
    href: string,
}

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
