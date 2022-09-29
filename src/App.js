import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListCointeiner from './components/ItemListCointeiner/ItemListCointeiner.js'


function App() {
  return (
    
    <div>
     <Navbar />
     <ItemListCointeiner greeting={'Bienvenido'}/>
    </div>


  );
}

export default App;
