import heroData, {type HeroButton, type HeroIllustration} from "../mockData/heroData.ts"

type HeaderProps = {
    header: string
}

type DescriptionProps = {
    description: string
}

type ButtonProps = {
    ctaButton: HeroButton
}

type ButtonsProps = {
    ctaButtons: HeroButton[]
}

type IllustrationProps = {
    illustration: HeroIllustration
}

function Header({header}: Readonly<HeaderProps>) {
    return <h1 className="left__header">{header}</h1>
}

function Description({description}: Readonly<DescriptionProps>) {
    return <p className="left__description">{description}</p>
}

function Button({ctaButton}: Readonly<ButtonProps>) {
    const {type, title} = ctaButton
    switch (type) {
        case "input":
            return <input type="text" placeholder={title}/>

        case "button":
            return (
                <button className="cta_buttons__signin btn primary-btn">{title}</button>
            )
    }
}

function Buttons({ctaButtons}: Readonly<ButtonsProps>) {
    return (
        <div className="left__cta_buttons">
            {ctaButtons.map((ctaButton) => (
                <Button key={ctaButton.id} ctaButton={ctaButton}/>
            ))}
        </div>
    )
}

function Illustration({illustration}: Readonly<IllustrationProps>) {
    const {alt, src} = illustration
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