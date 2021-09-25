import React from 'react'
import '../styles/successMessage.css'
const SuccessMessage = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <p className='sucessMessage'>
      {message}
    </p>
  )
}

export default SuccessMessage
