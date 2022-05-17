import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <nav className='nav'>
                <Link to="/"> Home </Link>
                <Link to="/favoritelist"> Favorites </Link>
            </nav>
        </>
    )
}