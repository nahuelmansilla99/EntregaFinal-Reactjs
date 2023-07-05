import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    

    return (
        <div className=" ">
            <div className="btn-group">
                <button className="btn btn-danger" onClick={decrement}>-</button>
                <h4 className="btn">{quantity}</h4>
                <button className="btn btn-success" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btn btn-primary" onClick={() => onAdd(quantity)} disabled={!stock} >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
};

export default ItemCount;