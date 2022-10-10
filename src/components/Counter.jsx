import React, { useState } from 'react'
import BackToHome from '../BackToHome';

function Counter() {
  const [result, SetResult] = useState(0);

  return (
    <div className='h-screen bg-gray-800 flex items-center justify-center flex-col gap-3'>
      <div className="rounded-md flex gap-10 flex-row items-center justify-center w-[50%] h-[50%] bg-gray-900">
          <button className='bg-red-800 w-[50px] rounded-md hover:scale-110 transition-all' onClick={() => {SetResult(result-1)}}>-</button>
          <h1 className='font-light text-8xl'>{result}</h1>
          <button className='bg-green-800 w-[50px] rounded-md hover:scale-110 transition-all' onClick={() => {SetResult(result+1)}}>+</button>
      </div>
        <BackToHome/>
    </div>
  )
}

export default Counter