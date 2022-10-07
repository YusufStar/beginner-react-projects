import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./Counter.css"

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <div className="counter">
        <h1 className='number'>{count}</h1>
        <div className="buttons">
          <button className='red' onClick={() => {setCount(count-1)}}><RemoveIcon/></button>
          <button className='green' onClick={() => {setCount(count+1)}}><AddIcon/></button>
        </div>
      </div>
    </div>
  )
}

export default Counter