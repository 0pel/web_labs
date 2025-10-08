import type { Link } from "@/lib/types.ts"

type RegisterData = {
    header: string
    title: string
    button: Link
}

const registerData: RegisterData = {
    header: "Запросите ранний доступ",
    title: "Зарегистрируйтесь и начните исследовать\nбезграничные возможности.",
    button: {
        href: "#",
        title: "Начать",
    },
}

export default registerData
