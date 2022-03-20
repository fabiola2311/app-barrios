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
    </div>
      
        
  );
}

export default App;
