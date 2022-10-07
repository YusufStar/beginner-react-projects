import './Cards.css';
import React from 'react'
import Link from '@material-ui/core/Link';
import {projects} from "./seed"

function cards() {
  
    return (
    <div className='app'>
    <h1 className='baslik'>My Beginner React Projects</h1>
    <div className="cards">
      {projects.map((project) => (
          <div className='card'>
            <Link href={`/${project}`} key={project+"s"}>{project}</Link>
      </div>
      ))}
    </div>
  </div>
  )
}

export default cards;