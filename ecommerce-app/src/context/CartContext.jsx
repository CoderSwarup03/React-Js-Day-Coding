import React from 'react'
import { createContext, useContext, useState } from 'react'
const CartContext = createContext();
export const useCart = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prev) => {
            const itemExist = prev.find((item) => item.id === product.id);
            if (itemExist) {
                return prev.map((item) => {
                    return (
                        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                    )
                })
            }
            return [...prev, { ...product, qty: 1 }]
        })
    }

    const deleteProduct = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    const totalPrice = cart.reduce((acc,item) => acc + item.price * item.qty, 0)


    return (
        <CartContext.Provider value={{ addToCart, deleteProduct, clearCart, totalPrice, cart, }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider