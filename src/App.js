import './App.css';
import Main from './components/Main';

import React from 'react';

const App = () => {
    return (
      <div className="grid-container">
        <header>
          <a href="/">eCommerce</a>
        </header>
        <Main/>
        <footer>Femi Adesola</footer>
      </div>
    );
}

export default App;


