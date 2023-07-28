import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [ cart, setCart] = useState([])
    
    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        }else {
            console.log('El producto fue agregado')
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )


}