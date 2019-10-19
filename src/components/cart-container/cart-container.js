import React from 'react';
import { Item } from '../item/item';
import './cart-container.css';
import { Summary } from '../summary/summary';


export class CartContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }

    onChange = (updatedProduct) => {
        const productsInCart = this.state.cart;
        const indexProduct = this.state.cart.findIndex(product => product.sku === updatedProduct.sku)

        if (indexProduct < 0) {
            productsInCart.push(updatedProduct)
        } else {
            productsInCart[indexProduct] = updatedProduct;
        }
        
        this.setState({
            cart: productsInCart
        }, () => { console.log(this.state.cart)})
    }

    render() {
        const products = this.props.products;

        return (
            <div className="cart-container">
                <section className="products">
                    <h1 className="main">Shopping cart</h1>
                    <ul className="products-list tableHead">
                        <li className="products-list-title row">
                            <div className="col-product">Product details</div>
                            <div className="col-quantity">Quantity</div>
                            <div className="col-price">Price</div>
                            <div className="col-total">Total</div>
                        </li>
                    </ul>
                    <ul className="products-list">
                        {products.map(product => <Item product={product} onQuantityChanged={this.onChange} />)}
                    </ul>
                </section>
                <Summary cart={this.state.cart} />
            </div>
        );
    }
}