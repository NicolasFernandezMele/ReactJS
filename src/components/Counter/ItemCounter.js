import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemCounter = (stock, {onAdd}) => {
const [count,setCount] = useState(0);

console.log(stock.enviaStock);

const mas = () =>{
    if(count<stock.enviaStock){
    setCount(count+1);
}
}

const menos = () =>{
    if(count>0)
        setCount(count-1);
    }

return (
    
    <div>
        <h2>{count}</h2>
        <button onClick={mas}>+</button>  
        <button onClick={menos}>-</button>
        <button onClick={onAdd}>Agregar Carrito</button>
        

    </div>



);

}

export default ItemCounter;
