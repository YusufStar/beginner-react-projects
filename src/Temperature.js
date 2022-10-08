import React, { useState } from 'react'
import "./Temperature.css"

function Temperature() {
    const [temp, setTemp] = useState(0)

  return (
    <div className='temperature_body'>
        <div className="temperature_container">
            <div className="temp">
                {temp}C°
            </div>
            <div className="buttons">
                <button style={{backgroundColor: "red"}} onClick={() => {setTemp(temp-1)}}>-</button>
                <button style={{backgroundColor: "green"}} onClick={() => {setTemp(temp+1)}}>+</button>
            </div>
        </div>
    </div>
  )
}

export default Temperature