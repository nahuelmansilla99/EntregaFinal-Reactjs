import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="d-flex flex-column align-items-center">
        <p className="h1">🛒 No hay productos en el carrito 🛒</p>
        <Link to="/" className="btn btn-danger d-flex mt-4">
          <p className="m-1 fw-bold">Volver al inicio</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column">
      <h1 className="m-3 d-flex justify-content-center">🛒 Carrito 🛒</h1>
      <div className="d-flex flex-column mb-5 ">
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
      </div>
        <h2 className="h1 d-flex justify-content-center">Total: ${total}</h2>
        <div className="d-flex align-items-center flex-row justify-content-around mt-2">
          <button onClick={() => clearCart()} className="btn btn-danger ps-4 pe-4 fw-bold">
            Vaciar Carrito
          </button>
          <div>
            <Link to="/checkout" className="btn btn-primary text-white pe-5 ps-5  fw-bold">
              Comprar
            </Link>
          </div>
        </div>

    </div>
  );
};

export default Cart;
