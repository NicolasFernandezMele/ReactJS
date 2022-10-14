import { useState } from "react";

let stock = 4;

const ItemCounter = ({onAdd}) => {
const [count,setCount] = useState(0);

const mas = () =>{
if(count<4)
    setCount(count+1);
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
