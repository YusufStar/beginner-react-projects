import React, { useState } from 'react'
import BackToHome from '../BackToHome';

function Counter() {
  const [result, SetResult] = useState(0);

  return (
    <div className='h-screen bg-gray-800 flex items-center justify-center flex-col gap-2'>
      <div className="rounded-md flex gap-5 flex-row items-center justify-center w-[50vw] h-[30vh] bg-gray-900">
          <button className='bg-red-800 w-[50px] rounded-md hover:scale-110 transition-all' onClick={() => {SetResult(result-1)}}>-</button>
          <h1 className='text-6xl'>{result}</h1>
          <button className='bg-green-800 w-[50px] rounded-md hover:scale-110 transition-all' onClick={() => {SetResult(result+1)}}>+</button>
      </div>
        <BackToHome w={"50vw"}/>
    </div>
  )
}

export default Counter