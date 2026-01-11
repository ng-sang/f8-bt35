import React from 'react'
import Nav from './components/Nav'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contac from "./pages/Contac"
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'
export default function App() {
  return (
    <>
    <Nav/>
    <hr></hr>
    <Routes>
      <Route path="/"element={<Home/>}/>         
      <Route path="About"element={<About/>}/>         
      <Route path="/Products"element={<Products/>}/>         
      <Route path="/Contac"element={<Contac/>}/>         
      <Route path="/ProductDetail/:id"element={<ProductDetail/>}/>       
      <Route path="*"element={<NotFound/>}/>       
    </Routes>
    </>
  )
}

//code-Based Route
//File-Based Route

//hạn chế : window.location.href

//cách xây dựng Multi layout
//-Protected Route