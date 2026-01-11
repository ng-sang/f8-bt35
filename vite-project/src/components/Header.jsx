import React, { use } from 'react'
import { AppContext } from '../App'

export default function Header() {
 const {setmessage} = use(AppContext);
 const {theme,setTheme}=use(AppContext)
 console.log(theme);
 
  return (
    <div>
      <h1>Header</h1>
      <div>
        <button onClick={()=>{
          setTheme(theme==="Light"?"dark":"Light")
        }}>
          {theme==="Light"?"dark":"Light"}
          tối</button>
        <hr></hr>
      </div>
    <button onClick={()=>{setmessage("khọc react khó")}} >change</button>
    </div>
  )
}
