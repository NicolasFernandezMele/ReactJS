import './cart.css'
import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div className='imagen'>
            <img src={cart} alt="cart"/>
            <p>10</p>
        </div>
    )
}

export default CartWidget