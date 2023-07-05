import { Link } from 'react-router-dom';


const Item = ({id, name, image, price, stock}) => {

    return (
        <article className="card">
            <header className="fs-3">
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={image} alt={name} className="img-fluid" />
            </picture>
            <section>
                <p className="text-center">
                    Precio: ${price}
                </p>
                <p className="text-center">Stock: {stock}</p>
            </section>
            <footer>
                <Link to={`../Product/Product/${id}`} className="btn btn-primary">Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item;