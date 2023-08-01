import cartImg from "./assets/basket-cart-icon-27.png";
import "./CartWidget.css";
import {Link} from 'react-router-dom';
import React from "react";
import { useCartContext } from "../CartContext/CartContext";



const CartWidget = () => {

    const { totalQuantity } = useCartContext();

    return (
        <Link to='/cart' className="imagenContadorDiv d-flex align-items-center">
            <img src={cartImg} className="imagenContador " alt='cart widget'/>
            <p>
                {totalQuantity}
            </p>
        </Link>
    )
}
  
export default CartWidget;