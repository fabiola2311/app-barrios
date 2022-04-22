import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../contexts/CartContext';
import './CartWidget.css';

function CartWidget() {
    const { cartList } = useCartContext()
    const [quantity, setQuantity] = useState(0)

    let count = 0
    cartList.map(value => {
        count = count + value.quantity
    })

    useEffect(() => {
        setQuantity(count)
    })

    return (
        cartList.length == 0 ?
            <></>
            :
            <>
                <span className="material-icons-round color size">shopping_cart</span>
                <p>{quantity} </p>

            </>
    )
}

export default CartWidget