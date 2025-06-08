import { Link } from "react-router-dom"
import MobileNav from "./MobileNav"
import MainNav from "./MainNav"
import NavLogo from '../assets/qucikbite logo.png';


const Header = () => {
  return (
    <div className="border-b  pt-4 pb-5 fixed w-full bg-white z-50 px-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500">
            <img src={NavLogo} alt="navlogo" className="w-32 md:w-40"/>
            </Link>
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="hidden md:block">
              <MainNav />
            </div>
        </div>
    </div>
  )
}

export default Header