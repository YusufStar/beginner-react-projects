import React, { useState } from 'react'
import "./Search.css"
import {countries} from 'country-list-json'

function Search() {
    const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='search_body'>
        <div className="searchbar_div">
            <input className='searchbar_input' placeholder='Enter Country Name' onChange={(event) => {
                setSearchTerm(event.target.value);
            }}/>
            <div className="countries">
            <ul>
                {countries.filter((country) => {
                    if(searchTerm == "") {
                        return country
                    } else if (country.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return country
                    }
                }).map((country) => (
                    <>
                    <li key={country.name}>{country.name}</li>
                    <br />
                    </>
                ))}
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Search