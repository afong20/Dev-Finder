import { LogoSvg } from "../icons";
import Link from 'next/link'
function NavBarBrand() {
    return (
        <Link  href="/">
            <figure className="flex items-center gap-4">

                    <LogoSvg className="w-8"/>
                    <figcaption className="mr-[2rem]">
                        <h1 className="text-slate-600 font-bold">Drinks Ahoy!</h1>
                    </figcaption>
            </figure>
        </Link>
    )
}

export default NavBarBrand;