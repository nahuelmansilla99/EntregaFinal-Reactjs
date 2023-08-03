import React, { createContext, useState, useContext } from "react";

export const useCartContext = () => useContext(CartContext) ;

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.log('Se agrego el producto')
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    };

    const clearCart = () => {
        setCart([])
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    };



    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, total, totalQuantity, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}