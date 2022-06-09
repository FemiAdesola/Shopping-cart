import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import React from 'react';
import AdminScreen from './screen/AdminScreen';
import Home from './screen/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
      <BrowserRouter>
        <div className="grid-container">
          <Header/>
            <Routes>
              <Route exact path="" element={<Home/>}/>
              <Route path="/admin" element={<AdminScreen/>}/>
          </Routes>
          <Footer/>
        </div>
    
      </BrowserRouter>
    );
}

export default App;


