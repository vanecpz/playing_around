import React from 'react';

export const Summary = (props) => {
    const totalItems = props.cart && props.cart.length && props.cart.reduce((totalNum, product) => {
        return totalNum + product.qty;
    }, 0) 

    const totalPrice = props.cart && props.cart.length && props.cart.reduce((totalNum, product) => {
        return totalNum + (product.qty * product.price);
    }, 0) 

    return (
        <aside className="summary">
            <h1 className="main">Order Summary</h1>
            <ul className="summary-items wrapper border">
                <li>
                    <span className="summary-items-number">{totalItems} Items</span
                    ><span className="summary-items-price"
                    >{totalPrice}<span className="currency">€</span></span
                    >
                </li>
            </ul>
            <div className="summary-discounts wrapper-half border">
                <h2>Discounts</h2>
                <ul>
                    <li><span>2x1 Mug offer</span><span>-10€</span></li>
                    <li><span>x3 Shirt offer</span><span>-3€</span></li>
                    <li><span>Promo code</span><span>0€</span></li>
                </ul>
            </div>
            <div className="summary-total wrapper">
                <ul>
                    <li>
                        <span className="summary-total-cost">Total cost</span
                        ><span className="summary-total-price">107€</span>
                    </li>
                </ul>
                <button type="submit">Checkout</button>
            </div>
        </aside>
    )
}