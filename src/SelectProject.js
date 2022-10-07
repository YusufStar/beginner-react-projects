import React from 'react'
import Counter from './Counter'
import Hello from './Hello'

function SelectProject({projectname}) {
  return (
    <div>
        {projectname == "Hello" ? <Hello/>:<Counter />}
    </div>
  )
}

export default SelectProject