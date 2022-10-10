import React from 'react'
import BackToHome from '../BackToHome'

function Hello() {
  return (
    <div className='h-screen flex-col flex items-center justify-center bg-blue-300 gap-5'>
      <h1 className='font-light text-4xl text-gray-800'>Hello Word! I am Hello Word Project</h1>
      <BackToHome/>
    </div>
  )
}

export default Hello