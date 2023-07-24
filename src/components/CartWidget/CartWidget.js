import cart from "./assets/basket-cart-icon-27.png";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div className="imagenContadorDiv d-flex align-items-center">
            <img className="imagenContador" src={cart} alt="cart-widget" />
            <p>0</p>
        </div>
        
    )
};


export default CartWidget;