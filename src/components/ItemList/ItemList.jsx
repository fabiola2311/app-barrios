import React from 'react'
import Item from '../Item/Item'
import ItemCount from '../ItemCount/ItemCount';
import './ItemList.css';

function ItemList({ listadoDeProductos }) {

  console.log(listadoDeProductos)
  
  return (
    <div className="itemList">
      {
      
      listadoDeProductos.map((valor) => <Item item={valor}/>)}

  
    </div>




  )
}

export default ItemList