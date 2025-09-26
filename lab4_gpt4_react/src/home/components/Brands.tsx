import brandsData, {type Brand} from "../../mockData/brandsData.ts"

type BrandsImageProps = {
    brand: Brand
}

function BrandsImage({brand}: Readonly<BrandsImageProps>) {
    return <img className="brands_section__img" src={brand.src} alt={brand.alt}/>
}

export default function Brands() {
    return brandsData.map((brand) => (
        <BrandsImage key={brand.id} brand={brand}/>
    ))
}