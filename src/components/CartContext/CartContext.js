import React, { createContext, useState, useContext } from "react";

// import { createContext, useState } from "react";

export const useCartContext = () => { return useContext(CartContext) };

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
})

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