import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([])

    function addItem(item, quantity) {
        setCartList([...cartList, { item: item, quantity: quantity }])
    }

    function removeItem(itemId) {
        const arrayFilter = cartList.filter((product) => {
            return product.item.id !== itemId
        })
        setCartList(arrayFilter)
    }

    function changeItem(item, quantity) {
        const itemId = item.id
        let arrayFilter = []
        cartList.forEach((product) => {

            if (product.item.id !== itemId) {
                arrayFilter = [...arrayFilter, product]
            }
            else {
                const newProduct = { "item": product.item, "quantity": quantity }
                arrayFilter = [...arrayFilter, newProduct]
            }
        })
        setCartList(arrayFilter)
    }


    function clear() {
        setCartList([])
    }

    function isInCart(itemId) {
        if (cartList.some(product => product.item.id === itemId)) {
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
            isInCart,
            changeItem

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider