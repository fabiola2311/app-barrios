import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import  getFetch  from '../../helpers/getFetch.js';

function ItemListContainer({ greeting }) {

    const [prod, setProd] = useState([])
    
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