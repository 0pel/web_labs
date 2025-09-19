import heroData, {type HeroButton, type HeroIllustration} from "../mockData/heroData.ts"

function Header({header}: { header: string }) {
    return <h1 className="left__header">{header}</h1>
}

function Description({description}: { description: string }) {
    return <p className="left__description">{description}</p>
}

function Button({ctaButton: {type, title}}: { ctaButton: HeroButton }) {
    switch (type) {
        case "input":
            return <input type="text" placeholder={title}/>

        case "button":
            return (
                <button className="cta_buttons__signin btn primary-btn">{title}</button>
            )
    }
}

function Buttons({ctaButtons}: { ctaButtons: HeroButton[] }) {
    return (
        <div className="left__cta_buttons">
            {ctaButtons.map((ctaButton, index) => (
                <Button key={index} ctaButton={ctaButton}/>
            ))}
        </div>
    )
}

function Illustration({illustration: {alt, src}}: { illustration: HeroIllustration }) {
    return <img src={src} alt={alt}/>
}

export default function Hero() {
    const {header, description, illustration, heroCtaButtons} = heroData

    return (
        <>
            <div className="hero_section__left">
                <Header header={header}/>
                <Description description={description}/>
                <Buttons ctaButtons={heroCtaButtons}/>
            </div>
            <div className="hero_section__right">
                <Illustration illustration={illustration}/>
            </div>
        </>
    )
}