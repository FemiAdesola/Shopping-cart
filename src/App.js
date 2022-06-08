import './App.css';
import Products from './components/Products';
import React from 'react';
import Filter from './components/Filter';
import Cart from './components/Cart';

const App = () => {
    return (
      <div className="grid-container">
        <header>
          <a href="/">eCommerce</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter />
              <Products />
            </div>
            <div className="sidebar">
              <Cart />
            </div>
          </div>
        </main>
        <footer>Femi Adesola</footer>
      </div>
    );
}

export default App;


