import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListCointeiner from './components/ItemListCointeiner/ItemListCointeiner.js'
import ItemCounter from './components/Counter/ItemCounter.js';
import ItemDetailCointainer from './components/ItemDetailCointainer/ItemDetailCointainer.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  const handleonAdd = () => {
    console.log("Se hizo Click")
  }

const [page, setpage] = useState('list');

  return (
     <div>
      <BrowserRouter>
      <Navbar />
     
        <Routes>
          <Route path='/' element={<ItemListCointeiner greeting={'Bienvenido'}/>}/>
          <Route path='/detail/:productoId' element={<ItemDetailCointainer />}/>
       </Routes>
        <ItemCounter onAdd={handleonAdd}/>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
