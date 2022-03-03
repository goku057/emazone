import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce( (totalPrice, p) => totalPrice + p.price, 0);
    
    let shipping = 0;
    if (totalPrice > 15){
        shipping = 4.99;
    }
    else if (totalPrice > 0){
        shipping = 15;
    }
    return (
        <div>
            <h4>Order summary</h4>
            <h5>Items ordered: {cart.length}</h5>
            <p>Product Price: {totalPrice}</p>
            <p>shipping Cost: {shipping}</p>
        </div>
    );
};

export default Cart;