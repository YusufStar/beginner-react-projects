import React, { useState } from 'react'

function Register() {
  const [input, SetInput] = useState(
    {
      name: "",
      surname: "",
      email: ""
    }
  )
  return (
    <div className='flex items-center justify-center h-screen bg-gray-800'>
      <form className="flex flex-col items-center justify-center gap-5 w-[25%] h-[50%] bg-gray-900 rounded-2xl" onSubmit={() => {alert(`name: ${input.name}, surname: ${input.surname}, email: ${input.email}`)}}>
        <h1 className='text-3xl text-red-800 font-light'>Register Form</h1>
        <input onChange={(e) => {SetInput({...input, name: e.target.value});}} type="text" className='text-center w-[50%] rounded-sm bg-transparent text-white text-md outline-none border-b-2 border-b-red-900' placeholder='Name' required/>
        <input onChange={(e) => {SetInput({...input, surname: e.target.value})}} type="text" className='text-center w-[50%] rounded-sm bg-transparent text-white text-md outline-none border-b-2 border-b-red-900' placeholder='Surname' required/>
        <input onChange={(e) => {SetInput({...input, email: e.target.value})}} type="email" className='text-center w-[50%] rounded-sm bg-transparent text-white text-md outline-none border-b-2 border-b-red-900' placeholder='Email' required/>
        <button type='submit' className='border-2 border-red-900 rounded-lg w-[25%] h-[10%] text-xl text-white hover:bg-red-900 transition-all'>Register</button>
      </form>
    </div>
  )
}

export default Register