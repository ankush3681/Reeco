import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DetailNav from './components/DetailNav';
import OrderData from './components/OrderData';
import ProductDetail from './components/ProductDetail';
import MissingProduct from './components/MissingProduct';
import { useState } from 'react';
import EditProduct from './components/EditProduct';

function App() {
  
  return (
    <div className="App">
     <Navbar/>
     <DetailNav/>
     <OrderData/>
     <ProductDetail/>
     {/* <MissingProduct/> */}
     {/* <EditProduct/> */}
    </div>
  );
}

export default App;
