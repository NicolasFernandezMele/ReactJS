import { useEffect, useState } from "react";
import { getProductByid} from '../../asyncMock'
import './ItemDetailCointainer.css'
import ItemDetail from "../ItemDetail/ItemDetail.js"
import { useParams } from "react-router-dom";

const ItemDetailCointainer = () => {
const [product, setProduct] = useState([]);
const {productoId} = useParams();
    

useEffect(() => {
    getProductByid(productoId)
    .then(product => 
        setProduct(product))
},[])



    return(
        <div>
            <h1>Detalles</h1>
               <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailCointainer;