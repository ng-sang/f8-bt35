import React, { useContext } from 'react'
import { ConvertContext } from './Convert' 

export default function Usd() {
    const { money, setMoney } = useContext(ConvertContext);
    const tỷ_giá = 26000;

    const handleChange = (e) => {
        const usd = e.target.value;
      
        setMoney(usd * tỷ_giá);
        console.log(usd);
        
    };

    return (
        <div>
            <label>USD: </label>
            <input 
                type='number' 
                value={money / tỷ_giá} 
                onChange={handleChange} 
                placeholder='Nhập số tiền USD...'
            />
        </div>
    )
}