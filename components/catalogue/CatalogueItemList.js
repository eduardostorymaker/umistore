import Image from "next/image"

const message = {
    noMoney: 'Preguntar',
    noQuantity: 'Contando...'
}

const fromMoneyToNumber = (money) => {
    return parseFloat(money.replace('$',''))
}

const fromMoneyToLocalMoney = (money) => {
    if (money) {
        const toLocalCurrency = fromMoneyToNumber(money).toLocaleString('es-ES', {
            style: 'currency',
            currency: 'PEN',
          })
        return ('S/ ' + toLocalCurrency.replace('PEN','')).trim()
    } else {
        return message.noMoney
    }
    //return 'S/ ' + fromMoneyToNumber(money)
}

const returnFirstImage = (images) => {
    if (images) {
        return images.split(',')[0]
    } else {
        return ''
    }
}


export default function CatalogueItemList ({ productDetail }) {
    console.log(productDetail)
    const { id, name, originalprice, quantity, images, finalprice} = productDetail
    return(
        <div className="w-full text-textcolor">
            <div className="w-full rounded-md overflow-hidden border-[1px] border-bordercolor">

                <div className="flex w-full justify-center">
                    <Image src={returnFirstImage(images)} alt={name} width={500} height={500} className="object-cover" priority />
                </div>
                <div className="w-full">
                    <div className="p-2 pb-0 w-full text-sm font-bold  text-textcolor">
                        {
                            "marca"
                        }
                    </div>
                    <div className="p-2 w-full text-textcolor">
                        {
                            name
                        }
                    </div>
                    <div className="flex justify-end px-2 w-full">
                        <div className="line-through text-gray-400">
                            {  
                                originalprice
                                &&
                                fromMoneyToLocalMoney(originalprice)
                            }
                        </div>
                        <div className="text-lg text-textcolor font-bold">
                            {
                                fromMoneyToLocalMoney(finalprice)
                            }
                        </div>
                    </div>
                    <div className="p-2 flex w-full justify-end text-sm">
                        {
                            quantity
                            ?
                            <div className="flex">
                                <div className="pr-2 text-textcolor">
                                    {
                                        quantity
                                    }
                                </div>
                                <div>
                                    uds.
                                </div>
                            </div>
                            :
                            <div>
                                <div>
                                    {
                                        message.noQuantity
                                    }
                                </div>
                            </div>
                        }
                        
                    </div>

                </div>
            </div>
        </div>
    )
}