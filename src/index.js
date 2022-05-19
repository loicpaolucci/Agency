import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "./components/Navbar/navbar.css";
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Work from './pages/Work';
import About from './pages/About';
import Home from './pages/Home';



  ReactDOM.render(

    
    <BrowserRouter>
    <Navbar />
    <main>
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/work/*" element={<Work />} />
        <Route path="/" element={<Home />} />
    </Routes>
    </main>
    <App />
    </BrowserRouter>,
    
  
  
  
  document.getElementById('root'));
 