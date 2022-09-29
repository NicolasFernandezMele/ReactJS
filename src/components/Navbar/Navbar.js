import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

return (

<nav>
    <div className="contenedor__navbar center">
        <h1>ComprayCompra</h1>

        <ul>
            <li>Remeras</li>
            <li>Pantalones</li>
            <li>Gorras</li>
        </ul>
        <CartWidget />  
    
    </div>
    
</nav>

)

}

export default Navbar