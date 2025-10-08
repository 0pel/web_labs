import type { Image, Link } from "@/lib/types.ts"
import logo from "@/assets/img/logo.svg"

export type Info = {
    image: Image
    address: string
    bottom: string
}

export type FooterLink = Link & { id: number }

export type Links = {
    links: FooterLink[]
    company: FooterLink[]
    contacts: FooterLink[]
}

export type FooterData = {
    header: string
    button: Link
    info: Info
    links: Links
}

const info: Info = {
    image: {
        src: logo,
        alt: "logo",
    },
    address: "ул. Профессора Поздеева, 13, к.Г, Пермь, Пермский край, 614013",
    bottom: "Все права защищены",
}

const links: Links = {
    links: [
        { title: "Овероны", href: "#", id: 1 },
        { title: "Соц. сети", href: "#", id: 2 },
        { title: "Счетчики", href: "#", id: 3 },
        { title: "Контакты", href: "#", id: 4 },
    ],
    company: [
        { title: "Условия использования", href: "#", id: 1 },
        { title: "Перс. данные", href: "#", id: 2 },
        { title: "Контакты", href: "#", id: 3 },
    ],
    contacts: [
        {
            title: "ул. Профессора\n Поздеева, 13, к.Г, Пермь",
            href: "#",
            id: 1,
        },
        { title: "+7 (342) 2-198-520", href: "tel:+73422198520", id: 2 },
        { title: "info@pstu.ru", href: "mailto:info@pstu.ru", id: 3 },
    ],
}

const footerData: FooterData = {
    header: "Хотите Шагнуть в Будущее Раньше Других?",
    button: {
        title: "Запросить ранний доступ",
        href: "#",
    },
    info,
    links,
}

export default footerData
