import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext'

function ItemDetail({ itemDetail }) {

    const [count, setCount] = useState(0)
    const { addItem, isInCart } = useCartContext()
    const [purchase, setPurchase] = useState(false)

    function onAdd(value) {
        setCount(value)
        setPurchase(true)
    }

    function onFinishBuy() {
        addItem(itemDetail, count)
    }


    return (
        <div className="card m-4" >
            <img src={itemDetail.foto} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{itemDetail.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{itemDetail.category}</h6>
                <p className="card-link">{itemDetail.price}</p>

                {!isInCart(itemDetail.id)
                    ? !purchase && <ItemCount stock={itemDetail.stock} onAdd={onAdd} />
                    : <>
                        <p>Agregado en el carrito!</p>
                        <Link to='/cart'><button className="btn btn-primary ">Ir al Carrito</button></Link>
                        <Link to='/'><button className="btn btn-secondary ">Seguir comprando</button></Link>
                    </>
                }
                {purchase && <><Link to='/cart'><button onClick={onFinishBuy} className="btn btn-primary ">Terminar compra</button></Link>
                    <Link to='/'><button onClick={onFinishBuy} className="btn btn-secondary ">Seguir comprando</button></Link>
                </>}
            </div>
        </div>
    )
}

export default ItemDetail