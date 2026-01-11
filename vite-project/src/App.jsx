import React, { createContext, useState } from 'react'
import Layout from './components/Layout'
export const AppContext =createContext();


export default function App() {
  const [message,setmessage]=useState("khọc react không kos")
  const [theme,setTheme]=useState("Light")
  return (
    <AppContext.Provider value={{ message, setmessage,theme,setTheme }}>
      <div className={`theme-${theme}`}><Layout/></div>
    </AppContext.Provider>
    
  )
}

// share dữ liệu bằng 
//context: truyền dữ liệu tới các component con mà nó mong muốn ko cần thông qua props
//Context object: React.createContext
// Context provider--> component để bọc các component khác
//COntext Comsumer--> nhận dữ liệu từ provider --> React hook useContext,use