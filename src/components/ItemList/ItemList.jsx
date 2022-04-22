import React from 'react'
import Item from '../Item/Item'
import './ItemList.css';

function ItemList({ productsList }) {
  return (
    <div className="itemList">
      {productsList.map((value) => <Item item={value} key={value.id} />)}
    </div>
  )
}

export default ItemList