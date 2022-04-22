import React, { useEffect } from 'react'
import './ItemCount.css';
import { useState } from 'react';

function ItemCount({ stock = 10, initial = 1, onAdd, isCart = false, index = 0 }) {

    const [count, setCount] = useState(initial)

    //Función para restar al count
    const substractCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }

        if (isCart) {
            onAdd(count, index)
        }
    }

    //Función para sumar al count
    const addCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const submitOnAdd = () => {
        if (stock > 1) {
            onAdd(count);
        }
        else {
            alert("No hay stock")
        }
    }

    useEffect(() => {
        if (isCart) {
            onAdd(count, index)
        }
    }, [count])



    return (
        <>
            <div className="input-group w-auto justify-content-center align-items-center m-2" >
                <button onClick={substractCount} type="button" className="button-minus border rounded-circle  icon-shape icon-sm mx-1 " data-field="quantity" >-</button>
                <div className='m-2 align-items-center'>
                    <p className="quantity-field border-0 text-center" >{count}</p>
                </div>
                <button onClick={addCount} type="button" className="button-plus border rounded-circle icon-shape icon-sm " data-field="quantity" >+</button>
            </div >
            {isCart ? <></> : <button onClick={submitOnAdd} className="btn btn-primary ">Añadir al carrito</button>}
        </>
    )
}

export default ItemCount

