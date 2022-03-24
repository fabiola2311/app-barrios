import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ item }) {
    const { id, categoria, nombre, precio } = item
    return (
        <Link to={`detalle/${id}`}>         
            <div className="card m-4" >
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{categoria}</h6>
                    <p className="card-link">{precio}</p>
                    <a href="#" className="card-link">Añadir al carrito</a>
                </div>
            </div>
        </Link>
    )
}

export default Item
