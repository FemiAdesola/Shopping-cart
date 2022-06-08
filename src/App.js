import './App.css';
import data from "./data.json";
import Products from './components/Products';
import React, { Component } from 'react';
import Filter from './components/Filter';
import Cart from './components/Cart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
      product: null,
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
    };
  
  }
  
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x._id !== product._id)));
  };

  createOrder = (order)=>{
    alert("Need to save order for " + order.name)
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">eCommerce</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter />
              <Products 
              addToCart={this.addToCart}
              ></Products>
            </div>
            <div className="sidebar">
              <Cart 
              cartItems={this.state.cartItems}
              removeFromCart = {this.removeFromCart}
              createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
        <footer>Femi Adesola</footer>
      </div>
    );
  }
}

export default App;


