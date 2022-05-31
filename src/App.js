
import './App.css';
import Basket from './components/Basket';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="grid-container">
     {/* <Header/>
     <div>
      <Main/>
      <Basket/>
      <Footer/>
     </div> */}

     <header>
       <a href="/">Shooping cart</a>
     </header>
     <main>
       Product List 
     </main>
     <footer>
       Femi Adesola 
     </footer>
    </div>
  );
}

export default App;
