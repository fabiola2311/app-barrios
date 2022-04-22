import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext'
import ItemCount from '../ItemCount/ItemCount';
import './Cart.css';

function Cart() {

  const { cartList, removeItem, clear, changeItem } = useCartContext()
  const [total, setTotal] = useState(0)
  const [dataForm, setDataForm] = useState({ name: '', telephone: '', email: '', emailVerification: '' })
  const [id, setId] = useState(null)
  const [isVerificated, setIsVerificated] = useState(true)

  //Calculo de price total
  let totalPrice = 0
  cartList.forEach((value) =>
    totalPrice = totalPrice + (value.item.price * value.quantity)
  )
  useEffect(() => {
    setTotal(totalPrice)
  })

  //Funcion Generar Orden
  const generateOrder = async (e) => {
    e.preventDefault();
    //Verificador de email
    if (dataForm.email != dataForm.emailVerification) {
      setIsVerificated(false)
      return
    }
    else {
      setIsVerificated(true)
    }

    //Objeto con nuevas ordenes 
    let order = {}

    order.buyer = dataForm
    order.total = total
    order.items = cartList.map(cartItem => {
      const id = cartItem.item.id
      const name = cartItem.item.name
      const price = cartItem.item.price

      return { id, name, price }
    })

    const database = getFirestore()
    const queryCollection = collection(database, 'generatedOrders')
    await addDoc(queryCollection, order)
      .then(({ id }) => setId(id))
      .catch(err => console.log(err))
      .finally(() => clear())
  }



  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  function onAdd(count, index) {
    changeItem(cartList[index].item, count)
  }




  //Condición Carrito Vacío
  if (cartList.length === 0 && !id) {
    return (
      <>
        <h1 className='m-4'>No hay items</h1>
        <Link to="/"><button className="btn btn-primary">Ir a comprar</button></Link>

      </>
    )
  }

  if (id) {
    return (
      <div>
        <div className='alert alert-success' >El ID de tu Orden de Compra es: {id}</div>
        <Link to="/"><button className="btn btn-primary">Volver a tienda</button></Link>
      </div>
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
          {cartList.map((value, index) =>
            <tr key={value.item.id}>
              <th scope="row">{index + 1}</th>
              <td>{value.item.name}</td>
              <td><ItemCount stock={value.item.stock} initial={value.quantity} isCart={true} index={index} onAdd={onAdd} /> </td>
              <td>{value.item.price}</td>
              <td>${value.item.price * value.quantity}</td>
              <td onClick={(e) => { e.preventDefault(); removeItem(value.item.id) }} scope="col">
                <a><span className="text-danger material-icons-round">cancel</span></a>
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

      <div>
        <Link to="/"><button className="btn btn-primary m-1">Seguir Comprando</button></Link>
        <button onClick={clear} className="btn btn-secondary m-1">Vaciar Carrito</button>
      </div>
      <form className='m-5 wrap' onSubmit={generateOrder}>
        <h2 className='h2'>Ingresa tus datos de compra</h2>
        <input type="text" name='name' placeholder='Nombre Completo' value={dataForm.name} onChange={handleChange} className='m-1 form-control' />
        <input type="text" name='telephone' placeholder='Número de telephone' value={dataForm.telephone} onChange={handleChange} className='m-1 form-control' />
        <input type="email" name='email' placeholder='Dirección de email' value={dataForm.email} onChange={handleChange} className='m-1 form-control' />
        <input type="email" name='emailVerification' placeholder='Verifica tu dirección de email' value={dataForm.emailVerification} onChange={handleChange} className='m-1 form-control' />
        {isVerificated ? <></> : <h3>El email no coincide</h3>}
        <button onClick={generateOrder} className="btn btn-primary m-1">Generar Orden</button>
      </form>
    </div>
  )
}

export default Cart