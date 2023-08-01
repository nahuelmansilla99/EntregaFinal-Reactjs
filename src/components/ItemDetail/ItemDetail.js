import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ id, name, image, description, price, stock}) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext(CartContext);
    const handleOnAdd= (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price 
        }
        addItem(item, quantity)
    }

    
    return (
        
        <div className="fondo container d-flex justify-content-center bg-color">
            <div className="d-flex" >
                <div className="geeks">
                    <img width={550} src={image} alt={name} />
                </div>
                <div className="d-flex flex-column flex-direction-column justify-content-center align-items-center m-5">
                    <h3 className="fs-1 fw-bold">{name}</h3>
                    <p className="fs-4 fw-medium">Precio: ${price}</p>
                    <p className="mb-3">{description}</p>

                    <footer className='d-flex justify-content-center'>
                        {
                            quantityAdded > 0 ? (
                                <Link to='/cart' className="btn btn-primary">Terminar compra</Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                            )
                        }
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;