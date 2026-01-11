import React, { useContext } from 'react' 
import { ConvertContext } from './Convert' 

export default function Vnd() {
    
    const { money, setMoney } = useContext(ConvertContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setMoney(value); 
        console.log("Số tiền VND hiện tại:", value);
    };

    return (
        <div style={{ marginBottom: '10px' }}>
            <label>VND: </label>
            <input
                type='number' 
                value={money} 
                onChange={handleChange} 
                placeholder='Nhập số tiền VND...'
                
            />
        </div>
    )
}