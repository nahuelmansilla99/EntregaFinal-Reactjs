import cartImg from "./assets/basket-cart-icon-27.png";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import {Link} from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity} = useContext(CartContext);

    return (
        <Link to='/cart' className="imagenContadorDiv d-flex align-items-center">
            <img src={cartImg} className="imagenContador " alt='cart-widget'/>
            <p>{totalQuantity}</p>
            {/* {totalQuantity} */}
        </Link>
    )
    // return (
    //     <div className="imagenContadorDiv d-flex align-items-center">
    //         <img className="imagenContador" src={cartImg} alt="cart-widget" />
    //         <p>0</p>
    //     </div>
        
    // )

    
};


export default CartWidget;