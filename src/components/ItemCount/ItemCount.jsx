import React from 'react'
import './ItemCount.css';
import { useState } from 'react';

function ItemCount({ stock = 10, initial = 1, onAdd}) {

    const [count, setCount] = useState(initial)

    const substractCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    } //Función para restar al count

    const addCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    } //Función para sumar al count

    const submitOnAdd = () => {
        if (stock > 0) {
            onAdd(count);
        }
        else {
            alert ("No hay stock")
        }
        
    }

    


    return (
        <>
            <div className="card m-4" >
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <div div className="input-group w-auto justify-content-end align-items-center" >
                        <input onClick={substractCount} type="button" value="-" className="button-minus border rounded-circle  icon-shape icon-sm mx-1 " data-field="quantity" />
                        <input type="number" step="1" max="10" value={count} name="quantity" className="quantity-field border-0 text-center w-25" />
                        <input onClick={addCount} type="button" value="+" className="button-plus border rounded-circle icon-shape icon-sm " data-field="quantity" />
                    </div >
                    <a href="#" onClick={submitOnAdd} className="btn btn-primary ">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default ItemCount

