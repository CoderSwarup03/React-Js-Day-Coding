import React, { createContext, useContext, useState } from 'react'
const ProductContext = createContext()
export const useProduct = () => useContext(ProductContext)
const ProductProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (product) => {
        const existsItem = cart.find((item) => item.id === product.id);
        if (existsItem) {
            setCart(cart.map((item) => item.id === product.id ? { ...existsItem, quantity: existsItem.quantity + 1 } : item))
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
        }
    }
    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const Increment = (id) => {
        setCart(cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    }
    const Decrement = (id) => {
        setCart(cart.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
    }

    return (
        <>
            <ProductContext.Provider value={{ addToCart, cart, deleteItem, Increment, Decrement }}>
                {children}
            </ProductContext.Provider>
        </>
    )
}

export default ProductProvider