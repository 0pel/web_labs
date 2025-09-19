import logoSvg from "../assets/img/logo.svg"

export type HeaderData = {
    logoData: HeaderLogoData,
    menuData: HeaderMenuLink[],
    buttonsData: HeaderAuthButton[],
}

export type HeaderMenuLink = {
    title: string,
    href: string
}
export type HeaderAuthButton = {
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
        title: "Главная",
        href: "#",
    },
    {
        title: "Что такое GPT?",
        href: "#",
    },
    {
        title: "Open AI",
        href: "#",
    },
    {
        title: "Кейсы",
        href: "#",
    },
    {
        title: "Библиотека",
        href: "#",
    },
]

export const buttonsData: HeaderAuthButton[] = [
    {
        title: "Войти",
        href: "#",
        isPrimary: false,
    },
    {
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
