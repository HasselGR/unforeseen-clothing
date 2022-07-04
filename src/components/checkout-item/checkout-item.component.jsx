import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector.js';

import {addItemToCart, removeItemToCart, deleteItemToCart} from '../../store/cart/cart.action';

import {CheckoutItemContainer, ImageContainer, Spans, Quantity, Arrow, Value, RemoveButton} from './checkout-item.styles.jsx';


const CheckoutItem = ( {cartItem} ) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems);


    const clearItemHandler= () =>  dispatch(deleteItemToCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemToCart(cartItems, cartItem));
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Spans> {name} </Spans>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow> 
            </Quantity>
            <Spans> {price} </Spans>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )


}


export default CheckoutItem;