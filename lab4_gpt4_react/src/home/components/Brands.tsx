import brandsData, { type Brand } from "@/mockData/brandsData.ts"
import { cn } from "@/lib/utils.ts"

type BrandsImageProps = {
    brand: Brand
}

function BrandsImage({ brand }: Readonly<BrandsImageProps>) {
    return <img src={brand.src} alt={brand.alt} />
}

export default function Brands() {
    return (
        <section
            className={cn(
                "flex flex-row flex-wrap",
                "gap-4 lg:gap-12",
                "justify-center",
            )}
        >
            {brandsData.map((brand) => (
                <BrandsImage key={brand.id} brand={brand} />
            ))}
        </section>
    )
}
