import Image from "next/image"
import logo from "../../public/logo.png"
export default function () {

    return(
        <div className=" flex justify-between h-full w-full bg-primary text-secondary">
            <div className="h-full flex items-center p-[5px] ">
                <Image src={logo} className=" h-full w-auto" />
            </div>
            <div className="h-full flex items-center pr-4 text-white">
                <h1>
                    Catálogo
                </h1>
            </div>
        </div>
    )
}