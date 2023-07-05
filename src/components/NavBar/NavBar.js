import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";



const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h2>SnowSport</h2></Link>
            <div className="btn-group">
                <Link to="/tablas"><button className="btn btn-secondary" >Tablas</button></Link>
                <Link to="/botas"><button type="button" className="btn btn-primary">Botas</button></Link>
                <Link to="/fijaciones"><button>Fijaciones</button></Link>
                <Link to="/goggles"><button>Goggles</button></Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;