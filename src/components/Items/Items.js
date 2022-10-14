import  './Items.css'
import { Link } from 'react-router-dom'

const Item = ({id,img,name,category,precio,descripcion}) => {

    return (

        <div className="tarjeta__contenido">
            <img src={img} alt={name}/>
            <div className="tarjeta__datos">
                <h1>{name}</h1>
                <h2>{category}</h2>
                <p>Precio: $ {precio}</p>
              <Link to={`/detail/${id}`}> Ver Detalle </Link>
            </div>
        </div>

    )
}

export default Item;