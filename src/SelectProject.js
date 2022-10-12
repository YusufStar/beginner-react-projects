import React from 'react'
import Hello from './components/Hello'
import Counter from "./components/Counter"
import Temperature from './components/Temperature'
import Search from "./components/Search"
import Register from "./components/Register"

function SelectProject({projectname}) {
  return (
    <div>
        {
        projectname == "Hello" ? <Hello/>:
        projectname == "Counter" ? <Counter/>:
        projectname == "Temperature" ? <Temperature/>:
        projectname == "Search" ? <Search/>:
        projectname == "Register" ? <Register/>:""
        }
    </div>
  )
}

export default SelectProject