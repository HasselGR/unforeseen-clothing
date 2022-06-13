import {CheckoutItemContainer, ImageContainer, Spans, Quantity, Arrow, Value, RemoveButton} from './checkout-item.styles.jsx';
import{ useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CheckoutItem = ( {cartItem} ) => {

    const { name, imageUrl, price, quantity } = cartItem;

    const { deleteItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const clearItemHandler= () =>  deleteItemToCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
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