import cartImg from "./assets/basket-cart-icon-27.png";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import {Link} from 'react-router-dom';
import React from "react";
// import ItemCount from "../ItemCount/ItemCount";

// export default CartWidget;



const CartWidget = () => {

    const { cart } = useContext(CartContext);

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    // const { ItemCount } = useContext(CartContext)
    return (
        <Link to='/cart' className="imagenContadorDiv d-flex align-items-center">
            <img src={cartImg} className="imagenContador " alt='cart-widget'/>
            <p className="">
                {totalQuantity}
            </p>
        </Link>
    )
}


  
export default CartWidget;