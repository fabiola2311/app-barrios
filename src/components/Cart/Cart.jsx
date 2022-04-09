import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext'

function Cart() {

  const { cartList, removeItem } = useCartContext()
  const [total, setTotal] = useState(0)
  const [prod, setProd] = useState([])


  let suma = 0
  cartList.map((valor) =>
    suma = suma + (valor.item.precio * valor.quantity)
  )
  useEffect(() => {
    setTotal(suma)
  })

console.log(cartList)



  if (cartList.length == 0) {
    return (
      <>
        <h1 className='m-4'>No hay items</h1>
        <Link to="/"><button className="btn btn-primary">Ir a comprar</button></Link>
        
      </>
    )
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre del Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((valor, indice) =>
            <tr>
              <th scope="row">{indice + 1}</th>
              <td>{valor.item.nombre}</td>
              <td>{valor.quantity}</td>
              <td>{valor.item.precio}</td>
              <td>${valor.item.precio * valor.quantity}</td>
              <td onClick={(e) => { e.preventDefault(); removeItem(valor.item.id) }} scope="col">
                <a href=""><span class="text-danger material-icons-round">cancel</span></a>
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Precio Total</th>
            <th scope="col">${total} </th>
            <th scope="col"></th>
          </tr>
        </tfoot>

      </table>



    </div>
  )
}

export default Cart