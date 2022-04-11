import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import getFetch from '../../helpers/getFetch.js';
import { useParams } from 'react-router-dom';
import { collection, doc, getDocs, getFirestore, query, where } from 'firebase/firestore';

function ItemListContainer({ greeting }) {

    const [prod, setProd] = useState([])
    const { categoria } = useParams()

    /*useEffect(() => {
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

    }, [categoria])*/

    useEffect(() => {
        if (categoria) {
            const db = getFirestore()

            const queryCollection = collection(db, 'items')
            const queryFilter = query(queryCollection,where('categoria','==',categoria))
            getDocs(queryFilter)
                .then(respuesta => setProd(respuesta.docs.map(producto =>
                    ({ id: producto.id, ...producto.data() })
                )))
                .catch((err) => { console.log("Error:" + err) })
                .finally(console.log("Proceso finalizado"))
        }
        else {
            const db = getFirestore()

            const queryCollection = collection(db, 'items')
            getDocs(queryCollection)
                .then(respuesta => setProd(respuesta.docs.map(producto =>
                    ({ id: producto.id, ...producto.data() })
                )))
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