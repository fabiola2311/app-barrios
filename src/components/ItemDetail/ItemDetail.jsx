import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

function ItemDetail({ itemDetail }) {

    const [render, setRender] = useState(0)

    function onAdd(value) {
        setRender(value)
    }

    return (
        <div className="card m-4" >
            <img src={itemDetail.foto} class="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{itemDetail.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{itemDetail.categoria}</h6>
                <p className="card-link">{itemDetail.precio}</p>
                {render == 0 ?
                    <ItemCount stock={itemDetail.stock} onAdd={onAdd} />
                    :
                    <Link to='/cart'><a href="#" className="btn btn-primary ">Terminar compra</a></Link>
            }
            </div>
        </div>
    )
}

export default ItemDetail