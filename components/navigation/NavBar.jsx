import { LogoSvg } from "../icons";
import MobileMenuButton from "./MobileMenuButton";
import NavBarLinks from "./NavBarLinks";
function NavBar() {
    return(
        <nav className="flex p-2 pr-3 shadow relative justify-between">
            <figure className="flex items-center gap-2">
                <LogoSvg className="w-8"/>
                <figcaption className="mr-[2rem]">
                    <h1>Drinks Ahoy!</h1>
                </figcaption>
                <NavBarLinks/>
            </figure>
            <MobileMenuButton/>
        </nav>
    )
}

export default NavBar;