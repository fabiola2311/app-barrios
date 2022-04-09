import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../contexts/CartContext';
import './CartWidget.css';

function CartWidget() {

    const { cartList } = useCartContext()
    const [cantidad, setCantidad] = useState(0)
    
    let contar = 0
    cartList.map(valor => {
        contar = contar + valor.quantity

    })

    useEffect(()=>{
        setCantidad(contar)
    })

    

    return (

        cartList.length == 0?
        <></>
        :
        <>
            <span className="material-icons-round color size">
                shopping_cart
            </span>
            <p>{cantidad} </p>

        </>


    )
}

export default CartWidget