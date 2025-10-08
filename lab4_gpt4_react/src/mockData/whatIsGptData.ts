import type { Link } from "@/lib/types.ts"

export type BlogPost = {
    id: number
    header: string
    content: string
}

export type BlogWithButton = {
    header: string
    button: Link
}

export type BlogPostData = {
    whatIsGptTopData: BlogPost
    whatIsGptMiddleData: BlogWithButton
    whatIsGptBottomData: BlogPost[]
}

const whatIsGptTopData: BlogPost = {
    id: 1,
    header: "Что такое GPT-4",
    content:
        "Мы так мнение друзей мне сообщаем как восторг. Вся передняя часть тарелки слышна ох как надо. Его неполноценное и неубедительное место жительства принадлежит ему. Соединение сделало невозможным собственное шумное жилье. На свадьбе светлость Ан настоял на такой человечности. Дружелюбный холостяцкий вход.",
}

const whatIsGptMiddleData: BlogWithButton = {
    header: "Возможности Превосходят Ваше Воображение",
    button: {
        href: "#",
        title: "Исследовать библиотеку",
    },
}

const whatIsGptBottomData: BlogPost[] = [
    {
        id: 1,
        header: "Чатботы",
        content:
            "Мы так мнение друзей мне сообщаем как восторг. Вся передняя часть тарелки слышна ох как надо.",
    },
    {
        id: 2,
        header: "База Знаний",
        content:
            " На свадьбе светлость Ан настоял на такой человечности. Дружелюбный холостяцкий вход. Как поставить невозможное.",
    },
    {
        id: 3,
        header: "Образование",
        content:
            "На свадьбе светлость Ан настоял на такой человечности. Дружелюбный холостяцкий вход. Как поставить невозможное.",
    },
]

const whatIsGptData: BlogPostData = {
    whatIsGptTopData,
    whatIsGptMiddleData,
    whatIsGptBottomData,
}

export default whatIsGptData
