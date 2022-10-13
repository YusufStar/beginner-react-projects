import React, { useState } from 'react'
import BackToHome from '../BackToHome'
import { countries } from "../seed"
import "./Style/Search.scss"

function Search() {
  const [input, SetInput] = useState("")

  return (
    <div className='h-screen bg-gray-800 flex items-center justify-center'>
      <div className="h-[75vh] gap-3 w-[75vw] bg-gray-900 rounded-lg flex flex-col items-center justify-center">
        <div class="form__group field">
          <input type="input" class="form__field" onChange={(e) => {
            SetInput(e.target.value)
          }} placeholder="Search Country" />
          <label for="name" class="form__label text-xs">Search Country</label>
        </div>
          <ul className='flex flex-col gap-2 items-center w-[50vw] h-[50vh] overflow-y-scroll'>
            {countries.filter((country) => {
              if (input == "") {
                return country
              } else if (country.name.toLocaleLowerCase().includes(input.toLowerCase())) {
                return country
              }
            }).map((country) => (
              <li className='text-center text-xs text-white w-[50vw] rounded-md bg-gray-800 list-none'>{country.name}</li>
            ))}
          </ul>
          <BackToHome w={"50vw"}/>
      </div>
    </div>
  )
}

export default Search