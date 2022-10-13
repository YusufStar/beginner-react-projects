import React from 'react'
import BackToHome from '../BackToHome'

function Hello() {
  return (
    <div className='h-screen flex-col flex items-center justify-center bg-gray-800 gap-5'>
      <h1 className='font-light text-xl text-white'>Hello Word!</h1>
      <BackToHome/>
    </div>
  )
}

export default Hello