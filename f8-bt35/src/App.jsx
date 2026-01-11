import React from 'react'
import Nav from './components/Nav'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import ProductDetail from './pages/ProductDetail';
export default function App() {
  return (
    <>
    <Nav/>
  
    <Routes>
      <Route path="/"element={<Home/>}/>         
      <Route path="about"element={<About/>}/>         
      <Route path="/products"element={<Products/>}/>         
      <Route path="/contact"element={<Contact/>}/>         
     <Route path="/product/:id" element={<ProductDetail />} /> 
    </Routes>
    </>
  )
}
