import CatalogueGroup from "./CatalogueGroup"

const getDataProduct = async () => {
    const res = await fetch("http://localhost:3030/api/productweb", {cache: "no-store"})
    const data = await res.json()

    return data.data
}

export default async function CatalogueTemplate () {
    
    const dataProduct = await getDataProduct()
    //console.log(dataProduct)

    return(
        <div className="w-full h-full"> 
            {
                dataProduct
                &&
                <CatalogueGroup dataProduct={dataProduct} />
            }
        </div>
    )
}