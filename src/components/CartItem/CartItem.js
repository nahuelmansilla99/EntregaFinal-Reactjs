import React from "react";
import "./CartItem.css";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";


const CartItem = ({id, name, price, image, quantity}) => {

    const {removeItem} = useContext(CartContext)

    const handleRemovItem= () => {
        removeItem(id);
    }

    return (
        <div className="fila d-flex align-items-center justify-content-around p-2 m-1 rounded-pill bg-secondary bg-opacity-10">
            <p className="h4 mb-0">{name}</p>
            <p className="mb-0">Precio: ${price}</p>
            <p className="mb-0">Cantidad: {quantity}</p>
            <p className="mb-0">Total: ${quantity * price}</p>
            <button className="btn btn-danger " onClick={handleRemovItem}>Eliminar</button>
        </div>
    )
}

export default CartItem;