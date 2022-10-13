import { Link } from '@material-ui/core'
import React from 'react'

function BackToHome ({w}) {
  return (
    <>
        <Link a href="/" className={`bg-purple-900 h-[50px] w-[${w ? w:"200px"}] rounded-lg flex items-center justify-center`} underline="none" color="inherit">Back To Home Page</Link>
    </>
  )
}

export default BackToHome