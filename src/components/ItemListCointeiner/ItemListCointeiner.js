import {useEffect, useState} from "react"
import { getProducts } from '../../asyncMock'
import ItemList from '../itemList/ItemList.js'
import "./ItemListCointeiner.css"

const ItemListCointeiner = ({}) => {
    
    const [loading, setloading] = useState(true);
    const [products,setProducts] = useState([]);

    useEffect(() =>{
        getProducts().then(response => {
          setProducts(response); 
        }).finally(() =>{
            setloading(false)}
            )
    },[]);

    if(loading){
        return <h1>Cargando</h1>
    }

  
      
    return (
    
        <div>
           <h1>Listado de Producto</h1>
           <ItemList products={products}/> 
            

        </div>

    )
    
}

export default ItemListCointeiner