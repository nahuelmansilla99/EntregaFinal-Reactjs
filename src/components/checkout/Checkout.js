import { useContext, useState } from "react";
import { addDoc, collection, getFirestore, } from "firebase/firestore";
import { CartContext } from "../CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import './Checkout.css';


const CheckOut = () => {

    const { cart, total, clearCart } = useContext(CartContext)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const finish = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
            clearCart();
            navigate("/ThankYou")
        }, 300)
        setTimeout(() => {
            navigate("/")
        }, 600)

    }

    const generateOrder = () => {
        const buyer = {
            name: name,
            email: email,
        }
        const fecha = new Date();
        const minutes = fecha.getMinutes()
        const seconds = fecha.getSeconds()
        const dateOrder = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${minutes >= 0 && minutes <= 9 ? 0 : ''}${fecha.getMinutes()}:${seconds >= 0 && seconds <= 9 ? 0 : ''}${fecha.getSeconds()}`;

        const order = {
            buyer: buyer,
            items: { cart },
            total: total,
            date: dateOrder
        };

        const db = getFirestore();

        const ordersCollection = collection(db, "orders")
        setLoader(true)
        addDoc(ordersCollection, order).then((data) => {
            setOrderId(data.id)
            setLoader(false)
        })
    }


    return (

        cart.length > 0 ? <div className=" mt-5 d-flex justify-content-center align-items-center" >
            <div className="conta row d-flex justify-content-center align-items-center ">
                <div className="">
                    <div className="formulario text-center">
                        <h2>Información de contacto</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="name" onInput={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="email" onInput={(e) => { setEmail(e.target.value) }} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="">
                    <div className="d-flex flex-column ">
                        <div className="d-flex">
                            <h3 className="">Total a pagar: </h3>
                            <div className="col center-block bg-primary text-white mb-3 p-1 fs-5 "> <b>${total}</b> </div>
                        </div>
                        <button type="button" className="btn btn-primary ps-5 pe-5 fw-bold fs-5" onClick={generateOrder}>Pagar</button>
                    </div>
                </div>
                <div className="">
                    {orderId && <div className="alert alert-success mt-4 " role="alert">
                        Se generó orden de compra con el ID: <b>{orderId}</b>.
                    </div>}
                    {loader && <div className="">
                        <span className="loader"></span>
                    </div>}
                    {orderId && <div className="d-flex flex-column justify-content-center">
                        <button type="button" className="btn btn-success fs-5 mt-2" onClick={() => finish()} >Finalizar</button>
                    </div>}
                </div>
            </div>
        </div>
            :
            <div className="m-5 alert alert-danger text-center d-flex justify-content-center ">
                <h2>Necesita realizar un pedido para ver esta página.</h2>
            </div>

    )
}

export default CheckOut;