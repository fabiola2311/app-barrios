
import React, { createContext, useContext, useState } from 'react'
const CartContext = createContext()



export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([])

    function addItem(e,item, quantity) {
        if (isInCart(item.id)) {
            e.preventDefault()
            alert("Ya existe el producto en el carrito")
        }
        else {
            setCartList([ ...cartList, { item: item, quantity: quantity }])
        }
    }

    function removeItem(itemId) {
        const arrayFiltrado = cartList.filter((producto) => {
            if (producto.item.id != itemId) {
                return producto
            }
        })
        setCartList(arrayFiltrado)
    }

    function clear() {
        setCartList([])
    }

    function isInCart(itemId) {
        
        if (cartList.some(producto => producto.item.id == itemId)) {
            return true
        }
        else {
            return false
        }
    }


    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            removeItem,
            clear,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider