import React from 'react'
import Hello from './components/Hello'
import Counter from "./components/Counter"

function SelectProject({projectname}) {
  return (
    <div>
        {
        projectname == "Hello" ? <Hello/>:
        projectname == "Counter" ? <Counter/>:""
        }
    </div>
  )
}

export default SelectProject