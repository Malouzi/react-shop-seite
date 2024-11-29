import { Link } from 'react-router-dom';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const Navbar = () => {
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
            {/* left side */}
            <div>
                <Link to="/">
                <HiMiniBars3CenterLeft />
                </Link>
            </div>

            {/* right side */}
            <div>
                nav items
            </div>
        </nav>

    </header>
  )
}

export default Navbar;