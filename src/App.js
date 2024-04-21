import React from 'react';
import 'animate.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './components/Category';
import Display from './components/Display';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Item from './components/Items';
import PhoneSell from './components/PhoneSell';
import NewLetter from './components/NewLetter';
import Footer from './components/Footer';
import GetinTouch from './components/GetinTouch';
import Details from './components/Details';
import Shop from './components/Shop';
import Popular from './components/Popular';
import Blog from './components/Blog';
import Discount from './components/Discount';
import DeliveryDetails from './components/DeliveryDetails';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Hero />     
          <Category /> 
          <Shop/>
          <Product />  
          <Display />  
          <Popular/>
          <Item />   
          <Discount/>
          <PhoneSell />
          <Blog/> 
          <NewLetter />
          <DeliveryDetails/>
        <Footer />   
        <Routes>
          <Route path="/details" element={<Details />} />
          <Route path="/Getintouch" element={<GetinTouch /> } />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
