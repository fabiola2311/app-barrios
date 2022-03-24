import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import logo from './logo.svg';
import ItemCount from './components/ItemCount/ItemCount';
import './App.css';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <ItemListContainer greeting='Hola somos Eureka' />
          } />

          <Route path='detalle/:detalleId' element={ <ItemDetailContainer /> } />
          <Route path='categoria/:categoria' element={ <ItemListContainer /> } />
          <Route path='cart' element={ <Cart /> } />   
          <Route path='/*' element={<Navigate to='/'/>  } />     
        </Routes>
      </BrowserRouter>

    </div>


  );
}

export default App;
