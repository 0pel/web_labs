import IllustrationSvg from "../assets/img/Illustration.svg"

export type HeroButton = {
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
        type: "input",
        title: "Введите Email",
    },
    {
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