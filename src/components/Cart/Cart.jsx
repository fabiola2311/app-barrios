import React from 'react'
import { useCartContext } from '../../contexts/CartContext'

function Cart() {

  const { cartList } = useCartContext()
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre del Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((valor, indice) => 
            <tr>
              <th scope="row">{indice+1}</th>
              <td>{valor.item.nombre}</td>
              <td>{valor.item.precio}</td>
              <td>{valor.quantity}</td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  )
}

export default Cart