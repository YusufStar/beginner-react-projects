import React, { useState } from 'react'
import BackToHome from "../BackToHome"

function Temperature() {
    const [temperature, SetTemperature] = useState(0)
    
  return (
    <div className='flex flex-col gap-5 items-center justify-center h-screen bg-gray-800'>
        <div className="flex flex-row gap-5 items-center justify-center w-[100vw] h-[75vh] bg-gray-900 rounded-full">
            <button className='text-white text-2xl w-[5rem] h-[5rem] rounded-full bg-gray-800' onClick={() => {
                SetTemperature(temperature - 1)
            }}>-</button>
            <div className={`w-[10rem] h-[10rem] flex rounded-full items-center justify-center ${temperature == 0 ? "bg-black":temperature < 0 ? "bg-blue-800":"bg-red-800"}`}>
                <h1 className='text-white font-normal text-2xl'>{temperature}C°</h1>
            </div>
            <button className='text-white text-2xl w-[5rem] h-[5rem] rounded-full bg-gray-800' onClick={() => {
                SetTemperature(temperature + 1)
            }}>+</button>
        </div>
        <BackToHome/>
    </div>
  )
}

export default Temperature