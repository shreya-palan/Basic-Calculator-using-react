import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {

    const[value,setValue] = useState('');
    /*value is initialized to empty string and setValue is the function
    used to update the state*/

    
  return (
    <div className="container">
        <div className="calculator">
            <form action="">
                <div className='display'>
                    <input type="text" value={value}/>
                </div>
                <div>
                    <input type="button" value="AC" onClick={e=> setValue('')}/>
                    {/*Clears the input value */}
                    
                    <input type="button" value="DEL" onClick={e=> setValue(value.slice(0, -1))}/>
                    {/*Delets the last character from the input value */}
                    
                    <input type="button" value="." onClick={e=> setValue(value + e.target.value)}/>
                    {/*appends the number to the current input number(value + e.target.value)*/}
                    
                    <input type="button" value="/" onClick={e=> setValue(value + e.target.value)}/>
                    
                </div>
                <div>
                    <input type="button" value="7" onClick={e=> setValue(value + e.target.value)}/>
                    <input type="button" value="8" onClick={e=> setValue(value + e.target.value)}/>
                    <input type="button" value="9" onClick={e=> setValue(value + e.target.value)}/>
                    <input type="button" value="*" onClick={e=> setValue(value + e.target.value)}/>
                </div>
                <div>
                    <input type="button" value="4" onClick={e=> setValue(value + e.target.value)}/>
                    <input type="button" value="5" onClick={e=> setValue(value + e.target.value)}/>
                    <input type="button" value="6" onClick={e=> setValue(value + e.target.value)}/>
                    <input type="button" value="+" onClick={e=> setValue(value + e.target.value)}/>
                </div>
                <div>
                    <input type="button" value="1" onClick={e=> setValue(value + e.target.value)}/>
                    <input type="button" value="2" onClick={e=> setValue(value + e.target.value)}/>
                    <input type="button" value="3" onClick={e=> setValue(value + e.target.value)}/>
                    <input type="button" value="-" onClick={e=> setValue(value + e.target.value)}/>
                </div>
                <div>
                    <input type="button" value="000" onClick={e=> setValue(value + e.target.value)}/>
                    <input type="button" value="00" onClick={e=> setValue(value + e.target.value)}/>
                    <input type="button" value="0" onClick={e=> setValue(value + e.target.value)}/>
                    <input type="button" value="=" className='equal' onClick={e=> setValue(eval(value))}/>
                    {/*eval is the predefined function that is used to perform basic arithmetic operation */}
                </div>
            </form>
        </div>
    </div>
  )
}

export default Calculator
