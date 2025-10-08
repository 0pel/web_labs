import H1 from "@/components/ui/h1.tsx"
import blogsData, { type Blog } from "@/mockData/blogsData.ts"
import P from "@/components/ui/p.tsx"
import H3 from "@/components/ui/h3.tsx"
import Button from "@/components/ui/button.tsx"
import { cn } from "@/lib/utils.ts"

type BlogProps = {
    blog: Blog
}

function Blog({ blog }: Readonly<BlogProps>) {
    const { image, date, title, link, isMain } = blog
    const timeFormatOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
    }

    return (
        <div className={cn("flex flex-col")}>
            <img src={image.src} alt={image.alt} />
            <div
                className={cn(
                    "bg-[#042C54] flex flex-col flex-1 items-start gap-2",
                    isMain ? "pt-8 pb-4 px-6" : "px-6 py-4",
                )}
            >
                <P className={cn("text-xs")}>
                    {date.toLocaleDateString(undefined, timeFormatOptions)}
                </P>
                <H3 className={isMain ? "text-2xl lg:max-w-2/3" : "text-lg"}>
                    {title}
                </H3>
                <Button
                    asChild
                    className={cn("text-white px-0 mt-auto")}
                    variant="link"
                    size="sm"
                >
                    <a href={link.href}>{link.title}</a>
                </Button>
            </div>
        </div>
    )
}

type ContentProps = {
    mainBlog: Blog
    blogs: Blog[]
}

function Content({ mainBlog, blogs }: Readonly<ContentProps>) {
    return (
        <div className={cn("flex flex-row gap-12")}>
            <Blog blog={mainBlog} />
            <div className={cn("grid grid-cols-2 gap-12")}>
                {blogs.map((blog) => (
                    <Blog blog={blog} key={blog.id} />
                ))}
            </div>
        </div>
    )
}

export default function Blogs() {
    const { title, mainBlog, blogs } = blogsData
    return (
        <section className={cn("space-y-10")}>
            <H1 className={cn("lg:max-w-2/3")}>{title}</H1>
            <Content mainBlog={mainBlog} blogs={blogs} />
        </section>
    )
}
