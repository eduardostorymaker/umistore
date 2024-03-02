import CatalogueProductList from "./CatalogueProductList";

export default function CatalogueGroup ({ dataProduct }) {
    
    const dataToShow = dataProduct
    //console.log(dataToShow)
    return(
        <div className="h-full w-full">
            <CatalogueProductList dataToShow={dataToShow} />
        </div>
    )
}