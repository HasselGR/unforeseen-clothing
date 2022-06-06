import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'


import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component';

import Button from '../button/button.component';


const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();


    const goTocCheckoutHandler = () => {
        navigate('/checkout')
    } 

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item =>
                     <CartItem key={item.id} cartItem={item}/>
                )}
            </div>
            <div>
                <Button onClick={goTocCheckoutHandler} >GO TO CHECKOUT</Button>
            </div>
        </div>
    )
}

export default CartDropdown