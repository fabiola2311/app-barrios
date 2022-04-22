import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import './App.css';
import CartContextProvider from './contexts/CartContext';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={
              <ItemListContainer greeting='Hola somos Eureka' />
            } />

            <Route path='detalle/:idDetail' element={<ItemDetailContainer />} />
            <Route path='categoria/:category' element={<ItemListContainer />} />
            <Route path='cart' element={<Cart />} />´
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>

    </div>


  );
}

export default App;
