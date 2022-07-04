import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { selectCartItems } from '../../store/cart/cart.selector'

import { CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';

import Button from '../button/button.component';


const CartDropdown = () => {

    const  cartItems  = useSelector(selectCartItems);
    const navigate = useNavigate();


    const goTocCheckoutHandler = () => {
        navigate('/checkout')
    } 

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                        cartItems.length ? (cartItems.map((item) =>(
                            <CartItem key={item.id} cartItem={item}/>
                        )
                    )
                    ): 
                    (
                        <EmptyMessage> Your Cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <div>
                <Button onClick={goTocCheckoutHandler} >GO TO CHECKOUT</Button>
            </div>
        </CartDropdownContainer>
    )
}

export default CartDropdown