import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getFetch from '../../helpers/getFetch.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

function ItemDetailContainer() {

    const [prod, setProd] = useState([])
    const { detalleId } = useParams()

    useEffect(() => {
        getFetch
            .then((respuesta) => { setProd(respuesta.find(producto => producto.id == detalleId)) })
            .catch((err) => { console.log("Error:" + err) })
            .finally(console.log("Proceso finalizado"))

    }, [])

    return (
        <div>
            <ItemDetail itemDetail={prod} />
        </div>
    )
}

export default ItemDetailContainer