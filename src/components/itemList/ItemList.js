import Item from '../Items/Items.js'

const ItemList = ({products}) =>{
   
 
    return  (
        
        <div className="tarjeta">
            {products.map(prod=> <Item key={prod.id}{...prod}/>)}
        </div>
       
           
    )
 
}

export default ItemList;