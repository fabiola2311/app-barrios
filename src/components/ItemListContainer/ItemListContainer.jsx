import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer({ greeting }) {

    const [prod, setProd] = useState([])

    const productos = [
        { id: 1, categoria: 'servicios', nombre: 'consultoria', precio: 800 },
        { id: 2, categoria: 'servicios', nombre: 'celulas', precio: 1000 },
        { id: 2, categoria: 'servicios', nombre: 'staffing', precio: 900 },
    ];

    const getFetch = new Promise((resolve, reject) => {
        let condition = true
        if (condition) {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        } else {
            reject('400 Error')
        }
    })

    useEffect(() => {
        getFetch
            .then((respuesta) => { setProd(respuesta) })
            .catch((err) => { console.log("Error:" + err) })
            .finally(console.log("Proceso finalizado"))

    }, [])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList listadoDeProductos={prod} />
        </>


    )
}

export default ItemListContainer