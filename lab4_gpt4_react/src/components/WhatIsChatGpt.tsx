import whatIsGptData, {type BlogPost, type BlogWithButton} from "../mockData/whatIsGptData.ts"

type WhatIsGptTopProps = {
    data: BlogPost
}

type WhatIsGptMiddleProps = {
    data: BlogWithButton
}
type WhatIsGptContainerProps = {
    item: BlogPost
}

type WhatIsGptBottomProps = {
    data: BlogPost[]
}

function WhatIsGptTop({data}: Readonly<WhatIsGptTopProps>) {
    const {header, content} = data
    return (
        <>
            <h3 className="top__header lined_header">{header}</h3>
            <p className="top__content">{content}</p>
        </>
    )
}

function WhatIsGptMiddle({data}: Readonly<WhatIsGptMiddleProps>) {
    const {
        header,
        button: {href, title},
    } = data

    return (
        <>
            <h2 className="middle__header">{header}</h2>
            <a href={href} className="middle_cta">
                {title}
            </a>
        </>
    )
}

function WhatIsGptContainer({item}: Readonly<WhatIsGptContainerProps>) {
    const {header, content} = item

    return (
        <div className="bottom__container">
            <h3 className="container__header lined_header">{header}</h3>
            <p className="container__content">{content}</p>
        </div>
    )
}

function WhatIsGptBottom({data}: WhatIsGptBottomProps) {
    return (
        data.map((item) => (
            <WhatIsGptContainer key={item.id} item={item}/>
        ))
    )
}

export default function WhatIsChatGpt() {
    const {
        whatIsGptTopData, whatIsGptMiddleData, whatIsGptBottomData,
    } = whatIsGptData

    return (
        <>
            <div className="what_is_chatgpt_section__top">
                <WhatIsGptTop data={whatIsGptTopData}/>
            </div>
            <div className="what_is_chatgpt_section__middle">
                <WhatIsGptMiddle data={whatIsGptMiddleData}/>
            </div>
            <div className="what_is_chatgpt_section__bottom">
                <WhatIsGptBottom data={whatIsGptBottomData}/>
            </div>
        </>
    )
}

