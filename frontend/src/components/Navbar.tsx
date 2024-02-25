import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between 
    max-container padding-container z-30 py-5">
        <Link to="/">
            <img src="pawblr-logo.jpg" alt="" width={80} height={35}/>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
            <li>
                <Link to="/" className="text-black flex-center text-lg
                cursor-pointer pb-1.5 transition-all hover:font-bold">
                Home
                </Link>
            </li>
            <li>
                <Link to="/post" className="text-black flex-center text-lg
                cursor-pointer pb-1.5 transition-all hover:font-bold">
                Post
                </Link>
            </li>
        </ul>

        <img src="menu.svg" alt="menu" width={32} height={32}
        className="inline-block cursor-pointer lg:hidden" /> 
    </nav>
  )
}

export default Navbar