import IllustrationSvg from "@/assets/img/Illustration.svg"
import type { Image } from "@/lib/types.ts"

export type HeroButton = {
    id: number
    type: "email" | "button"
    title: string
}

export type HeroData = {
    header: string
    description: string
    heroButtons: HeroButton[]
    illustration: Image
}

export const heroButtons: HeroButton[] = [
    {
        id: 1,
        type: "email",
        title: "Введите Email",
    },
    {
        id: 2,
        type: "button",
        title: "Начать",
    },
]

export const illustration: Image = {
    src: IllustrationSvg,
    alt: "gpt3",
}

export const header = "Построим Что-нибудь Невероятное с GPT-4 OpenAI"

export const description =
    "Однако кровать для помощи в путешествии неприятна. " +
    "Не мысли все осуществляют благословение. " +
    "Снисхождение ко всему, радость, изменение бурной привязанности. " +
    "Вечеринку мы лет на заказ разрешили."

const heroData: HeroData = {
    header,
    description,
    heroButtons,
    illustration,
}
export default heroData
