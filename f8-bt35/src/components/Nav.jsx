import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  
  const linkStyle = ({ isActive }) => ({
    marginRight: "20px",        
    textDecoration: "none",    
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
    fontSize: "18px",
    
  });

  return (
    <div style={{ padding: "20px", borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
        <NavLink to='/' style={linkStyle} className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg 
                   hover:bg-blue-700 hover:shadow-blue-500/50 
                   active:scale-95 transition-all duration-200">Home</NavLink>
        <NavLink to='/about' className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg 
                   hover:bg-blue-700 hover:shadow-blue-500/50 
                   active:scale-95 transition-all duration-200" style={linkStyle}>About</NavLink>
        <NavLink to='/products'className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg 
                   hover:bg-blue-700 hover:shadow-blue-500/50 
                   active:scale-95 transition-all duration-200" style={linkStyle}>Products</NavLink>
        <NavLink to='/contact'className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg 
                   hover:bg-blue-700 hover:shadow-blue-500/50 
                   active:scale-95 transition-all duration-200" style={linkStyle}>Contact</NavLink>   
    </div>
  )
}