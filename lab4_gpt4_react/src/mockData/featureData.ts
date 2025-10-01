import featurePng from "@/assets/img/feature_image.png"
import type { Image, Link } from "@/lib/types.ts"

export type FeatureData = {
    header: string
    title: string
    text: string
    link: Link
    image: Image
}

const link: Link = {
    title: "Запросить ранний доступ",
    href: "#",
}

const image: Image = {
    src: featurePng,
    alt: "feature",
}

const featureData: FeatureData = {
    header: "Запросить ранний доступ",
    title: "Превосходя все ожидания",
    text:
        "Однако кровать для помощи в путешествии неприятна. " +
        "Не мысли все осуществляют благословение. " +
        "Снисхождение ко всему, радость, изменение бурной привязанности. " +
        "Вечеринку мы лет на заказ разрешили.",
    link,
    image,
}

export default featureData
