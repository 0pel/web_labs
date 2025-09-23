import {useEffect, useState} from "react"

import headerData, {
    type HeaderAuthButton,
    type HeaderData,
    type HeaderLogoData,
    type HeaderMenuLink,
} from "../mockData/headerData.ts"

type LogoProps = {
    logoData: HeaderLogoData
}

type BurgerProps = {
    isBurgerActive: boolean,
    onMenuShow: () => void
}

type MenuItemProps = {
    menuItemData: HeaderMenuLink
}

type ButtonProps = {
    buttonData: HeaderAuthButton
}

// блокируем и разблокируем скролл во время открытия модального окна
const body = document.querySelector("body")!
const noOverflow = () => body.classList.add("oh")
const overflow = () => body.classList.remove("oh")

export function Logo({logoData}: Readonly<LogoProps>) {
    const {alt, href, src} = logoData
    return (
        <div className="header__logo">
            <a href={href} className="logo__link">
                <img className="link__name" src={src} alt={alt}/>
            </a>
        </div>
    )
}

export function Burger({isBurgerActive, onMenuShow}: Readonly<BurgerProps>) {
    return (
        <div
            className={`header__burger_menu ${isBurgerActive ? "" : "hidden"}`}
            onClick={onMenuShow}
        >
            <div className="burger_menu__line"></div>
            <div className="burger_menu__line"></div>
            <div className="burger_menu__line"></div>
        </div>
    )
}

export function MenuItem({menuItemData}: Readonly<MenuItemProps>) {
    const {title, href} = menuItemData
    return (
        <li className="menu__item">
            <a href={href} className="item__link">
                {title}
            </a>
        </li>
    )
}

export function Button({buttonData}: Readonly<ButtonProps>) {
    const {title, href, isPrimary} = buttonData

    return (
        <a href={href}>
            <button className={`cta_buttons__signin btn${isPrimary ? " primary-btn" : ""}`}>
                {title}
            </button>
        </a>
    )
}

// функция создания шаблона с параметрами правой части меню
export const RightHeader = ({
                                rightHeaderData,
                                isBurgerActive,
                                isMenuShown,
                                onMenuClose,
                            }: {
    rightHeaderData: HeaderData,
    isBurgerActive: boolean,
    isMenuShown: boolean,
    onMenuClose: () => void
}) => {
    const {menuData, buttonsData} = rightHeaderData

    return (
        <div className={isMenuShown ? "header__right" : "header__right hidden"}>
            <aside className="header__menu">
                <div
                    className={`menu__close ${isBurgerActive ? "" : "hidden"}`}
                    onClick={onMenuClose}
                >
                    <div className="menu__line"></div>
                    <div className="menu__line"></div>
                </div>
                <ul className="menu">
                    {menuData.map((item) => (
                        <MenuItem key={item.id} menuItemData={item}/>
                    ))}
                </ul>
            </aside>
            <div className="cta_buttons">
                {buttonsData.map((button) => (
                    <Button key={button.id} buttonData={button}/>
                ))}
            </div>
        </div>
    )
}

export default function Header() {
    const [isBurgerActive, setIsBurgerActive] = useState(false)
    const [isMenuShown, setIsMenuShown] = useState(false)

    const {logoData} = headerData

    useEffect(() => {
        const updateBurgerState = () => {
            const width = window.innerWidth

            if (width <= 1024) {
                overflow()
                setIsBurgerActive(true)
                setIsMenuShown(false)
                return
            }

            setIsBurgerActive(false)
            setIsMenuShown(true)
        }

        updateBurgerState()

        // вешаем прослушку события резсайза для обновления состояния бургера
        window.addEventListener("resize", updateBurgerState)

        // возвращаем функцию очистки прослушки на ресайз окна
        return () => {
            window.removeEventListener("resize", updateBurgerState)
        }
    }, [])

    return (
        <>
            <Logo logoData={logoData}/>
            <Burger isBurgerActive={isBurgerActive} onMenuShow={() => {
                setIsMenuShown(true)
                noOverflow()
            }}/>

            <RightHeader
                rightHeaderData={headerData}
                isBurgerActive={isBurgerActive}
                isMenuShown={isMenuShown}
                onMenuClose={() => {
                    setIsMenuShown(false)
                    overflow()
                }}
            />
        </>
    )
}