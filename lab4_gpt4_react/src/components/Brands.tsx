import brandsData, {type Brand} from "../mockData/brandsData.ts"

function BrandsImage({brand}: { brand: Brand }) {
    return <img className="brands_section__img" src={brand.src} alt={brand.alt}/>
}

export default function Brands() {
    return brandsData.map((brand, index) => (
        <BrandsImage key={index} brand={brand}/>
    ))
}