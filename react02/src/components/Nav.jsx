import React from 'react'
import {Link, useLocation, NavLink} from 'react-router-dom'
export default function Nav() {
    const uloco =useLocation()
    console.log(uloco);
    
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Products'>Products</NavLink>
        <NavLink to='/Contac'>Contac</NavLink>   
        <NavLink to='/ProductDetail'>ProductDetail</NavLink> 
        
    </div>
  )
}
