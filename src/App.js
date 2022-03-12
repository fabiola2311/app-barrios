import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='Hola somos Eureka'/>
      <ItemCount stock={5} initial={5} onAdd={(number) => {alert(number)}}/>
      <ItemCount stock={5} initial={5} onAdd={(number) => {alert("Hola la compra es:" + number)}}/>
    </div>
      
        
  );
}

export default App;
