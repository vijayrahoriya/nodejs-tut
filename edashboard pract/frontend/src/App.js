import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Footer from './component/Footer'
import Signup from './component/Signup';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<h1>Products</h1>}/>
        <Route path="/add" element={<h1>Add Product Component</h1>}></Route>
        <Route path="/update" element={<h1>Update Product Component</h1>}></Route>
        <Route path="/profile" element={<h1>profile Product Component</h1>}></Route>
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
