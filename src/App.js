import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import AboutPage from './AboutPage/Aboutpage';


function App() {
  return (  
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer"> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </div>
    <Footer/>
    </Router>
  );
}

export default App;
