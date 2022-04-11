import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getFetch from '../../helpers/getFetch.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import {doc, getDoc, getFirestore} from 'firebase/firestore';

function ItemDetailContainer() {

    const [prod, setProd] = useState([])
    const { detalleId } = useParams()


    useEffect(() =>{
        const db = getFirestore()
        console.log(detalleId)

        const queryDoc = doc(db, 'items',detalleId)
        getDoc(queryDoc)
            .then(respuesta => setProd({id:detalleId,...respuesta.data()}))
            .catch((err) => { console.log("Error:" + err) })
            .finally(console.log("Proceso finalizado"))

            console.log(prod)


    },[])


    return (
        <div>
            <ItemDetail itemDetail={prod} />
        </div>
    )
}

export default ItemDetailContainer