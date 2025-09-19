export type BlogPost = {
    header: string,
    content: string
}

export type BlogWithButton = {
    header: string
    button: {
        href: string,
        title: string,
    },
}

export type BlogPostData = {
    whatIsGptTopData: BlogPost,
    whatIsGptMiddleData: BlogWithButton,
    whatIsGptBottomData: BlogPost[],
}

const whatIsGptTopData: BlogPost = {
    header: "Что такое GPT-4",
    content:
        "Мы так мнение друзей мне сообщаем как восторг. Вся передняя часть тарелки слышна ох как надо. Его неполноценное и неубедительное место жительства принадлежит ему. Соединение сделало невозможным собственное шумное жилье. На свадьбе светлость Ан настоял на такой человечности. Дружелюбный холостяцкий вход.",
}

const whatIsGptMiddleData: BlogWithButton = {
    header: "Что такое GPT-4",
    button: {
        href: "#",
        title: "Исследовать библиотеку",
    },
}

const whatIsGptBottomData: BlogPost[] = [
    {
        header: "Чатботы",
        content:
            "Мы так мнение друзей мне сообщаем как восторг. Вся передняя часть тарелки слышна ох как надо.",
    },
    {
        header: "База Знаний",
        content:
            " На свадьбе светлость Ан настоял на такой человечности. Дружелюбный холостяцкий вход. Как поставить невозможное.",
    },
    {
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
