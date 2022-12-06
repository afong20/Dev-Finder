
import MobileMenuButton from "./MobileMenuButton";
import NavBarLinks from "./NavBarLinks";
import LoginButton from "./LoginButton";
import NavBarBrand from "./NavBarBrand";
function NavBar() {
    return(
        <nav className="flex p-2 pr-3 shadow relative justify-between">
            <div className="flex items-center gap-2">
                <NavBarBrand/>
                <NavBarLinks/>
            </div>
            <LoginButton className="md:flex text-slate-600 font-bold items-center"/>
            <MobileMenuButton className="md:hidden"/>
        </nav>
    )
}

export default NavBar;