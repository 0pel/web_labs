import googleSvg from "../assets/img/brands/google.svg"
import slackSvg from "../assets/img/brands/slack.svg"
import atlassianSvg from "../assets/img/brands/atlassian.svg"
import dropboxSvg from "../assets/img/brands/dropbox.svg"
import shopifySvg from "../assets/img/brands/shopify.svg"

export type Brand = {
    id: number
    src: string,
    alt: string
}

const brandsData: Brand[] = [
    {
        id: 1,
        src: googleSvg,
        alt: "google",
    },
    {
        id: 2,
        src: slackSvg,
        alt: "slack",
    },
    {
        id: 3,

        src: atlassianSvg,
        alt: "atlassian",
    },
    {
        id: 4,
        src: dropboxSvg,
        alt: "dropbox",
    },
    {
        id: 5,
        src: shopifySvg,
        alt: "shopify",
    },
]

export default brandsData
