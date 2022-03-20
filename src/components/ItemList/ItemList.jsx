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
      <ItemCount stock={5} initial={5} onAdd={(number) => {alert(number)}}/>
      <ItemCount stock={5} initial={5} onAdd={(number) => {alert("Hola la compra es:" + number)}}/>

  
    </div>




  )
}

export default ItemList