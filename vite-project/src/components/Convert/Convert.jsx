import React, { createContext, useState } from 'react' 
import Vnd from './Vnd'
import Usd from './Usd'


export const ConvertContext = createContext();

export default function CurrencyConverter() { 
  const [money, setMoney] = useState(0);

  return (
    
    <ConvertContext.Provider value={{ money, setMoney }}>
      <div>
          <h2>Chuyển đổi tiền tệ</h2>
          <Vnd />
          <Usd />
      </div>
    </ConvertContext.Provider>
  )
}