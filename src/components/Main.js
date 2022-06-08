import React from 'react';
import Products from './Products';
import Filter from './Filter';
import Cart from './Cart';

const Main = () => {
    return (
        <div>
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
        </div>
    );
};

export default Main;