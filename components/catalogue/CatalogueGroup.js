"use client"

import { useState } from "react";
import CatalogueProductList from "./CatalogueProductList";

export default function CatalogueGroup ({ dataProduct }) {
    
    const dataFilteredByPublished = dataProduct.filter(item=>item.published)
    const [dataToShow,setDataToShow] = useState(dataFilteredByPublished)
    const [filter,setFilter] = useState("")

    const onChangeFilter = (e) => {
        setFilter(e.target.value)
        setDataToShow(dataFilteredByPublished.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    //console.log(dataToShow)
    return(
        <div className="h-full w-full grid grid-rows-[70px_1fr]">
            <div className="w-full h-full pt-4 pl-4" >
                <div className="w-full h-full"  >
                    <input 
                        type="text" 
                        placeholder="Buscar..." 
                        className="p-2 bg-white rouded-sm h-full w-[400px] border-[1px] border-primary" 
                        onChange={onChangeFilter}
                        value={filter}
                    />
                </div>
            </div>
            <CatalogueProductList dataToShow={dataToShow} />
        </div>
    )
}