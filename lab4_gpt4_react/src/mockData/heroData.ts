import IllustrationSvg from "../assets/img/Illustration.svg"

export type HeroButton = {
    id : number,
    type: "input" | "button",
    title: string
}

export type HeroIllustration = {
    src: string,
    alt: string
}

export type HeroData = {
    header: string,
    description: string,
    heroCtaButtons: HeroButton[],
    illustration: HeroIllustration,
}

export const heroCtaButtons: HeroButton[] = [
    {
        id : 1,
        type: "input",
        title: "Введите Email",
    },
    {
        id : 2,
        type: "button",
        title: "Начать",
    },
]

export const illustration: HeroIllustration = {
    src: IllustrationSvg,
    alt: "gpt3",
}

export const header = "Построим Что-нибудь Невероятное с GPT-4 OpenAI"

export const description =
    "Однако кровать для помощи в путешествии неприятна. Не мысли все осуществляют благословение. Снисхождение ко всему, радость, изменение бурной привязанности. Вечеринку мы лет на заказ разрешил"

const heroData: HeroData = {
    header,
    description,
    heroCtaButtons,
    illustration,
}
export default heroData