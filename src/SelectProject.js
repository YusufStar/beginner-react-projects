import React from 'react'
import Hello from './components/Hello'
import Counter from "./components/Counter"
import Temperature from './components/Temperature'
import Search from "./components/Search"

function SelectProject({projectname}) {
  return (
    <div>
        {
        projectname == "Hello" ? <Hello/>:
        projectname == "Counter" ? <Counter/>:
        projectname == "Temperature" ? <Temperature/>:
        projectname == "Search" ? <Search/>:""
        }
    </div>
  )
}

export default SelectProject