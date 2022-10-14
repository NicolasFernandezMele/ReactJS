import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {

return (

<nav>
    <div className="contenedor__navbar center">
        
        <Link to='/'>
        <h1>ComprayCompra</h1>
        </Link>
        <div>
            <button>Remeras</button>
            <button>Pantalones</button>
            <button>Gorras</button>
        </div>
        <CartWidget />  
    
    </div>
    
</nav>

)

}

export default Navbar