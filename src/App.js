import './App.css';
import Basket from './components/Basket';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import data from "./data.json";

import Products from './components/Products';

function App() {
  return (
    <div className="grid-container">
      <header>
        <a href="/">Shooping cart</a>
      </header>
      <main>
        <div className="content">
            <div className="main">
              <Products products={data.products} />
            </div>
            <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>
        Femi Adesola 
      </footer>
    </div>
  );
}

export default App;

