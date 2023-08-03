import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList';


import {getDocs, collection, query, where} from 'firebase/firestore';
import { db } from '../../config/firebase';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams([])



    useEffect(() => {
        const collectionRef = categoryId
            ? query(collection(db, "item"), where("category", "==", categoryId))
            : collection(db, "item")

        getDocs(collectionRef)
            .then(response =>{
                const productsAdapted = response.docs.map(doc =>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
    }, [categoryId])

    return (
        <div className="container">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;
