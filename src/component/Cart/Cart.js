import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice= cart.reduce((total,prd)=>total+prd.price,0)

    let shippingCost=0;
    if(totalPrice>15){
        shippingCost=4.99;
    }else if(totalPrice>0){
        shippingCost=12.99
    }
    const tax=Math.round(totalPrice*15/100);
    const grandTotal = Math.round(totalPrice + shippingCost + tax);
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered:{cart.length}</h4>
            <p><small>Shipping cost:{shippingCost}</small></p>
            <p><small>Tax+VAT:{tax}</small></p>
            <h4>Total Price:{grandTotal}</h4>
        </div>
    )
}

export default Cart;
