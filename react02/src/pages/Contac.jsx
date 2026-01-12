import React from 'react'
import { useNavigate,Navigate } from 'react-router-dom'
let islogin =false;
export default function Contac() {
  const navigate =useNavigate();
  // if (!islogin) {
  //   return <Navigate to={"/Products"} replace/>
  // }
  return (
    <div>
     <h1>
       Contac
      </h1>
      <button onClick={()=>navigate("/Products",{
        replace:true,
      })}>clickme</button>
      </div>
  )
}
