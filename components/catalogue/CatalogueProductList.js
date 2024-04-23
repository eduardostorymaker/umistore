import CatalogueItemList from "./CatalogueItemList";

export default function CatalogueProductList({ dataToShow }) {

    //console.log(dataToShow)
    return(
        <div className="h-full w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 h-full w-full gap-4 p-4">
                {
                    dataToShow.map(item =>
                        <CatalogueItemList key={item.id} productDetail={item} />
                    )
                }
            </div>
        </div>
    )
}