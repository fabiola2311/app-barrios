import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='Hola somos Eureka'/>
      <ItemDetailContainer/>
    </div>
      
        
  );
}

export default App;
