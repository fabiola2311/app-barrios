import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

function ItemListContainer({ greeting }) {

    const [prod, setProd] = useState([])
    const { category } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (category) {
            const database = getFirestore()

            const queryCollection = collection(database, 'items')
            const queryFilter = query(queryCollection, where('category', '==', category))
            getDocs(queryFilter)
                .then(response => setProd(response.docs.map(product =>
                    ({ id: product.id, ...product.data() })
                )))
                .catch((err) => { console.log("Error:" + err) })
                .finally(console.log("Proceso finalizado"))

        }
        else {
            const database = getFirestore()

            const queryCollection = collection(database, 'items')
            getDocs(queryCollection)
                .then(response => setProd(response.docs.map(product =>
                    ({ id: product.id, ...product.data() })
                )))
                .catch((err) => { console.log("Error:" + err) })
                .finally(() => setLoading(false))
        }


    }, [category])



    return (
        <>
            <h1>{greeting}</h1>
            {loading ? <h2>Cargando...</h2>
                :
                <ItemList productsList={prod} />
            }
        </>


    )
}

export default ItemListContainer