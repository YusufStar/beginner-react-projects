import React, { useState } from 'react'
import { countries } from "../seed"
import "./Search.scss"

function Search() {
  const [input, SetInput] = useState("")

  return (
    <div className='h-screen bg-gray-800 flex items-center justify-center'>
      <div className="h-[75%] gap-5 w-[75%] bg-gray-900 flex flex-col items-center justify-center">
        <div class="form__group field">
          <input type="input" class="form__field" onChange={(e) => {
            SetInput(e.target.value)
          }} placeholder="Search Country" />
          <label for="name" class="form__label">Search Country</label>
        </div>
          <ul className='flex flex-col gap-2 items-center w-[50%] h-[50%] overflow-y-scroll'>
            {countries.filter((country) => {
              if (input == "") {
                return country
              } else if (country.name.toLocaleLowerCase().includes(input.toLowerCase())) {
                return country
              }
            }).map((country) => (
              <li className='text-center rounded-xl text-white w-[75%] bg-gray-800 list-none'>{country.name}</li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default Search