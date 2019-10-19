import React from 'react';
import './App.css';
import { CartContainer } from './components/cart-container/cart-container';

function App() {

  const products = [
    { qty: 0, name: 'Shirt', sku: 'X7R2OPX', price: 20, img: 'shirt', alt: 'Beautiful shirt, (im so sorry)'},
    { qty: 0, name: 'Mug', sku: 'X2G2OPZ', price: 5, img: 'mug', alt: 'Beautiful mug, (im so sorry)'},
    { qty: 0, name: 'Cap', sku: 'X3W2OPY', price: 10, img: 'cap', alt: 'Beautiful cap, (im so sorry)'}
  ];
  

  return (
    <div className="App">
       <CartContainer products={products} />
    </div>
  );
}

export default App;
