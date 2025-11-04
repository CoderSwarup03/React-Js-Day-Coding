import React, { useContext, useState } from 'react'
import { createContext } from 'react'
const myContext = createContext();
export const userCart = () => useContext(myContext);

const ContextProvider = ({ children }) => {
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

    const onDelete = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <myContext.Provider value={{ addToCart, totalPrice, cart, onDelete, clearCart }}>
            {children}
        </myContext.Provider>
    )
}

export default ContextProvider