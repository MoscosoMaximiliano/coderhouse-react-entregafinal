// import logoImage from "../images/"
import CartWidget from "./CartWidget"
import Link from "./Link"

import logoImage from "../../images/logo.png"


// eslint-disable-next-line react/prop-types
const NavBar = ({itemCartNumber}) => {
  return (
    <header className='flex justify-between align-middle items-center center p-2 bg-slate-800'>
      <Link route="/" style="text-center inline-table relative">
        <img src={logoImage} alt='logo_page' className="cursor-pointer w-12 h-12"/>
        </Link>
      <nav className='flex-row gap-2 h-auto'>
        <ul className="list-none h-auto">
          <Link route="/category/currency">Currency</Link>
          <Link route="/category/equipement">Equipment</Link>
          <Link route="/about">About</Link>
        </ul>
      </nav>
      <div className="flex align-middle">
        <CartWidget itemsCartNumber={itemCartNumber}/>
        <a href="#" className="py-5 px-7 bg-orange-300 text-black border-none rounded cursor-pointer transition-all delay-75 ease-linear hover:bg-orange-500 hover:-translate-y-1 hover:scale-110">
          Contact me!
        </a>
      </div>
    </header>
  )
}

export default NavBar
