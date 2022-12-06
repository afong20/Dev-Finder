import { LogoSvg } from "../icons";
import MobileMenuButton from "./MobileMenuButton";
import NavBarLinks from "./NavBarLinks";
import LoginButton from "./LoginButton";
function NavBar() {
    return(
        <nav className="flex p-2 pr-3 shadow relative justify-between">
            <figure className="flex items-center gap-2">
                <LogoSvg className="w-8"/>
                <figcaption className="mr-[2rem]">
                    <h1 className="text-slate-600 font-bold">Drinks Ahoy!</h1>
                </figcaption>
                <NavBarLinks/>
            </figure>
            <LoginButton className="md:flex text-slate-600 font-bold"/>
            <MobileMenuButton className="md:hidden"/>
        </nav>
    )
}

export default NavBar;