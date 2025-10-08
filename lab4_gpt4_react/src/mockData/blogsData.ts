import blog0 from "@/assets/img/blog0.png"
import blog1 from "@/assets/img/blog1.png"
import blog2 from "@/assets/img/blog2.png"
import blog3 from "@/assets/img/blog3.png"
import blog4 from "@/assets/img/blog4.png"
import type { Image, Link } from "@/lib/types.ts"

export type Blog = {
    id: number
    image: Image
    date: Date
    title: string
    link: Link
    isMain: boolean
}

type BlogsData = {
    title: string
    mainBlog: Blog
    blogs: Blog[]
}

const mainBlog: Blog = {
    id: 0,
    image: {
        src: blog0,
        alt: "tunnel",
    },
    title: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
    date: new Date(2021, 8, 26),
    link: {
        href: "#",
        title: "Читать полную статью",
    },
    isMain: true,
}

const blogs: Blog[] = [
    {
        id: 1,
        image: {
            src: blog1,
            alt: "tunnel",
        },
        title: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
        date: new Date(2021, 8, 26),
        link: {
            href: "#",
            title: "Читать полную статью",
        },
        isMain: false,
    },
    {
        id: 2,
        image: {
            src: blog2,
            alt: "tunnel",
        },
        title: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
        date: new Date(2021, 8, 26),
        link: {
            href: "#",
            title: "Читать полную статью",
        },
        isMain: false,
    },
    {
        id: 3,
        image: {
            src: blog3,
            alt: "tunnel",
        },
        title: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
        date: new Date(2021, 8, 26),
        link: {
            href: "#",
            title: "Читать полную статью",
        },
        isMain: false,
    },
    {
        id: 4,
        image: {
            src: blog4,
            alt: "tunnel",
        },
        title: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
        date: new Date(2021, 8, 26),
        link: {
            href: "#",
            title: "Читать полную статью",
        },
        isMain: false,
    },
]

const blogsData: BlogsData = {
    title: "Многое Происходит, Мы Ведем об Этом Блог.",
    mainBlog,
    blogs,
}

export default blogsData
