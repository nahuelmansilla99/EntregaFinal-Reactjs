import React from "react";
// import { useContext } from "react";
// import Item from "../Item/Item";
// import { CartContext } from '../CartContext/CartContext';
import { Link } from "react-router-dom";


// export default Cart;

import { useCartContext } from "../CartContext/CartContext";

const Cart = ({ id, name, image, description, price, stock }) => {
  const { cartListProducts, totalCartAmount, deleteProductById } = useCartContext();

  return (

    <div>

        {cartListProducts.length === 0 ? 
        <div className="d-flex flex-column align-items-center">
          <p className="h2">No hay productos</p>
          <Link to="/" className="btn btn-danger d-flex mt-4">
            <p className="m-1 fw-bold">Volver al inicio</p>
          </Link>
        </div> :
        <>

        <div className="">
            <table className=" ">
                <div>
                    {cartListProducts.map((item) => (
                        <div key={id}>
                            <div>
                            <img src={image} alt={name} width={120} />
                            </div>
                            <div>{name}</div>
                            <div>{stock}</div>
                            <div>${price}</div>
                            <div>
                            <button onClick={() => deleteProductById(id)}className="btn btn-danger">X</button>
                            </div>
                        </div>
                    ))}

                    <div>
                        <div colspan={2}></div>
                        <div>Total: ${totalCartAmount()}</div>
                        <div>
                            <Link to={"/checkout"} className="btn btn-danger">
                            Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </table>
        </div>
          <div></div>
        </>
      }
    </div>
  );
};

export default Cart;
