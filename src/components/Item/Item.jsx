import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ item }) {
    const { id, category, name, price } = item
    return (
        <Link to={`/detalle/${id}`}>
            <div className="card m-4" >
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                    <p className="card-link">{price}</p>
                    <p className="card-link">Añadir al carrito</p>
                </div>
            </div>
        </Link>
    )
}

export default Item
