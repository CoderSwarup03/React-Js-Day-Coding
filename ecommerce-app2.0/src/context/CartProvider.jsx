import React, { Children } from 'react'
import { createContext, useContext, useState } from 'react'
const CartContext = createContext();
export const userCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prev) => {
            const ItemPrev = prev.find((item) => item.id === product.id);
            if (ItemPrev) {
                return prev.map((item) => {
                    return (
                        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                    )
                })
            }
            return [...prev, { ...product, qty: 1 }]
        })
    }

    const deleteCart = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0)

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteCart, totalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider