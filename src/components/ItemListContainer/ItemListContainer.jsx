import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import getFetch from '../../helpers/getFetch.js';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting }) {

    const [prod, setProd] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        if (categoria) {
            getFetch
            .then(respuesta => setProd(respuesta.filter(producto => producto.categoria === categoria)))
            .catch((err) => { console.log("Error:" + err) })
            .finally(console.log("Proceso finalizado"))
            
        } else {
            getFetch
                .then((respuesta) => { setProd(respuesta) })
                .catch((err) => { console.log("Error:" + err) })
                .finally(console.log("Proceso finalizado"))

        }

    }, [categoria])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList listadoDeProductos={prod} />
        </>


    )
}

export default ItemListContainer