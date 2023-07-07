import { Link, /* NavLink */ } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';



const NavBar = () => {
    return (
        <nav className="navbar ">
            <Link to="/">
                <button className="btn btn-lg  fs-2 fw-bold fst-italic">SnowSport</button>
            </Link>
            <div className="btn-group">
                <Link to="/category/tabla"><button className="btn fw-semibold fs-4" >Tablas</button></Link>
                <Link to="/category/bota"><button className="btn fw-semibold fs-4">Botas</button></Link>
                <Link to="/category/fijacion"><button className="btn fw-semibold fs-4">Fijaciones</button></Link>
                <Link to="/category/goggle"><button className="btn fw-semibold fs-4">Goggles</button></Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;