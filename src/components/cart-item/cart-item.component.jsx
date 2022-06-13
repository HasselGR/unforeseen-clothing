import {CartItems} from'./cart-item.styles.jsx'

const CartItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return(
        <CartItems>
            <img src={imageUrl} alt = {`${name}`} />
            <div>
                <span className='name'>{name} </span>
                <br></br>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </CartItems>
    )
}


export default CartItem;