import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemDetailContainer() {

    const [prod, setProd] = useState([])
    const { idDetail } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const database = getFirestore()

        const queryDoc = doc(database, 'items', idDetail)
        getDoc(queryDoc)
            .then(response => setProd({ id: idDetail, ...response.data() }))
            .catch((err) => { console.log("Error:" + err) })
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {loading ? <h2>Cargando...</h2>
                :
                <ItemDetail itemDetail={prod} />
            }
        </div>
    )
}

export default ItemDetailContainer