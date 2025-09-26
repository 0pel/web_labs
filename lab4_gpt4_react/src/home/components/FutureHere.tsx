import futureHereData, {
    type FutureHerePost,
} from "../../mockData/futureHereData.ts"

type RightContainerProps = {
    item: FutureHerePost
}

function RightContainer({ item }: Readonly<RightContainerProps>) {
    const { title, description } = item

    return (
        <div className="right__container">
            <h3 className="container__header lined_header">{title}</h3>
            <p className="container__content">{description}</p>
        </div>
    )
}

export default function FutureHere() {
    return (
        <>
            <div className="future_here__left">
                <h2 className="left__header">
                    Будущее Уже Наступило и Тебе Нужно Лишь Осознать. Шагни в
                    Будущее и Воплоти Его.
                </h2>
                <a href="/future-here" className="left__cta">
                    Запросить ранний доступ
                </a>
            </div>
            <div className="future_here__right">
                {futureHereData.map((item) => (
                    <RightContainer key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}
