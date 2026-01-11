import React,{use}  from 'react'
import { AppContext } from '../App'

export default function Title() {
  const {message} =use(AppContext);
 
  
  return (
    <div>
<h1>{message}</h1>

    </div>
  )
}
