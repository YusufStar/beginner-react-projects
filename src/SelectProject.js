import React from 'react'
import Counter from './Counter'
import Hello from './Hello'
import Search from './Search'
import Temperature from './Temperature'

function SelectProject({projectname}) {
  return (
    <div>
        {
        projectname == "Hello" ? <Hello/>:
        projectname == "Counter" ? <Counter/>:
        projectname == "Temperature" ? <Temperature/>:
        projectname == "Search" ? <Search />:""
        }
    </div>
  )
}

export default SelectProject