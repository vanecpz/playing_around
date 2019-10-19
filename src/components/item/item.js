import React from 'react';

export class Item extends React.Component {
    constructor (props) {
        super(props);
        this.inputRef = React.createRef();

        this.state = {
            product: props.product
        }
    }

    setQty = (value) => {
        if ( value < 0) return

        const updatedProduct = this.state.product;
        updatedProduct.qty = value;

        this.setState(Object.assign(this.state, updatedProduct ), () => {
            this.props.onQuantityChanged(this.state.product);
        })
    }

    handleChange = (event) => {
        this.setQty(event.target.value);
    }

    handleClick = (type) => {
        const value = type === 'dec' ? this.state.product.qty - 1 : +this.state.product.qty + 1;
        this.setQty(value);
    }

    render () {
        return (
            <li className="product row">
                <div className="col-product">
                <figure className="product-image">
                    <img src={require(`../../img/${this.state.product.img}.png`)} alt="Cap" />
                    <div className="product-description">
                    <h1>{this.state.product.name}</h1>
                    <p className="product-code">Product code {this.state.product.sku}</p>
                    </div>
                </figure>
                </div>
                <div className="col-quantity">
                <button className="count" onClick={() => { this.handleClick('dec') } }>-</button>
                <input type="text" className="product-quantity" ref={this.inputRef} onChange={this.handleChange} value={this.state.product.qty} />
                <button className="count" onClick={() => { this.handleClick('inc') }}>+</button>
                </div>
                <div className="col-price">
                <span className="product-price">{this.state.product.price}</span
                ><span className="product-currency currency">€</span>
                </div>
                <div className="col-total">
                <span className="product-price">{this.state.product.qty * this.state.product.price}</span>
                <span className="product-currency currency">€</span>
                </div>
            </li>
        );
    };
} 