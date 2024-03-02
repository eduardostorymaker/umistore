export default function CatalogueItemList ({ productDetail }) {
    const { id, name, price, quantity, mainimage, discount, finalprice} = productDetail
    return(
        <div>
            <div>

                <div>

                </div>
                <div>
                    {
                        name
                    }
                </div>
                <div>
                    {
                        price
                    }
                </div>
                <div>
                    {
                        finalprice
                    }
                </div>
                <div>
                    {
                        quantity
                    }
                </div>
            </div>
        </div>
    )
}