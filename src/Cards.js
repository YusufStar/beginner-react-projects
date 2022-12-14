import React, { useState } from 'react'
import {projects} from "./seed"

function Cards() {
  const [input, SetInput] = useState("");
  
    return (
    <div className='h-screen bg-gray-600 flex flex-col items-center justify-center overflow-hidden'>
    <h1 className='font-light text-white text-xl'>My Beginner React Projects</h1>
    <input className='m-3 w-[40vw] h-[2rem] bg-gray-900 rounded-lg outline-none text-white items-center text-center text-xs' placeholder='Search Project Name' onChange={(e) => {
      SetInput(e.target.value)
    }}/>
    <div className="flex flex-col gap-2 items-center justify-center rounded-lg bg-gray-800 w-[50vw] h-[40vh] overflow-x-auto">
      {projects.filter((project) => {
        if(input == ""){
          return project
        } else if(project.toLocaleLowerCase().includes(input.toLowerCase())) {
          return project
        }
      }).map((project) => (
          <a className='font-normal text-xl text-white hover:text-gray-900 transition-all' href={`/${project}`} key={project+"s"}>{project}</a>
      ))}
    </div>
  </div>
  )
}

export default Cards;