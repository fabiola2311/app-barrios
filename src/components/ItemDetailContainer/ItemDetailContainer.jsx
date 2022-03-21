import React, { useEffect, useState } from 'react'
import  getFetch  from '../../helpers/getFetch.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

function ItemDetailContainer() {

    const [prod, setProd] = useState([])

    useEffect(() => {
        getFetch
            .then((respuesta) => { setProd(respuesta.find(producto => producto.id === 1)) })
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