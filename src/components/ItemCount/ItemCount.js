import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(1);

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
        <div className="d-flex flex-column aline-items-center">
            <div className="btn-group mb-3 ">
                <button className="btn btn-danger fs-4 fw-bold" onClick={decrement}>-</button>
                <h4 className="btn fs-4 fw-bold">{quantity}</h4>
                <button className="btn btn-success fs-4 fw-bold" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btn btn-primary fs-5 fw-bold mb-4" onClick={() => onAdd(quantity)} disabled={!stock} >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
};

export default ItemCount;