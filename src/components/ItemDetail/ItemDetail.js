import { getProductByid} from '../../asyncMock'
import ItemCounter from '../Counter/ItemCounter.js';
import { useState } from 'react';

const ItemDetail = ({id,name,precio,category,img,stock,descripcion}) => {


let enviaStock = stock


    
return(
    <div className="tarjeta__detalle tarjeta__detalle--datos">
    <img src={img} alt={name}/>
    <div className="tarjeta__detalle--datos">
       <h1>{name}</h1>
       <h2>{category}</h2>
       <p>Precio: $ {precio}</p>
       <p>{descripcion}</p>
    </div>
    <ItemCounter enviaStock={enviaStock}/>
  </div>

)

}

export default ItemDetail;