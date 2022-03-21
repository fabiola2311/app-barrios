import React from 'react'

function ItemDetail({ itemDetail }) {
        return (


        <div className="card m-4" >
            <img src={itemDetail.foto} class="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{itemDetail.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{itemDetail.categoria}</h6>
                <p className="card-link">{itemDetail.precio}</p>
                <a href="#" className="card-link">Añadir al carrito</a>
            </div>
        </div>
    )
}

export default ItemDetail