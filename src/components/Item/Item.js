import { Link } from 'react-router-dom';
import "./Item.css";


const Item = ({id, name, image, price, stock}) => {

    return (
        <article className="card m-3 " >
            <picture>
                <img id={id} src={image} alt={name} className="img-fluid rounded-top-1" />
            </picture>
            <div className='card-body'>
                <header className="card-title ">
                    <h2>{name}</h2>
                </header>
                <section className='card-text'>
                    <p className="text-center">
                        Precio: ${price}
                    </p>
                    <p className="text-center">Stock: {stock}</p>
                </section>
                <footer className='d-flex justify-content-center'>
                    <Link to={`/item/${id}`} className="btn btn-primary">Ver Detalle</Link>
                </footer>
            </div>
        </article>
    )
}

export default Item;