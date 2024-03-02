import CatalogueItemList from "./CatalogueItemList";

export default function CatalogueProductList({ dataToShow }) {

    //console.log(dataToShow)
    return(
        <div>
            {
                dataToShow.map(item =>
                    <CatalogueItemList key={item.id} productDetail={item} />
                )
            }
        </div>
    )
}