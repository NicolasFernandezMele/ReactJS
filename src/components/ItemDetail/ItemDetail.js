const ItemDetail = ({id,name,precio,category,img,stock,descripcion}) => {

return(
    <div className="tarjeta__detalle tarjeta__detalle--datos">
    <img src={img} alt={name}/>
    <div className="tarjeta__detalle--datos">
       <h1>{name}</h1>
       <h2>{category}</h2>
       <p>Precio: $ {precio}</p>
       <p>{descripcion}</p>
    </div>
  </div>
    

)

}

export default ItemDetail;