import React from 'react'
import '../styles/errorMessage.css'
export const ErrorMessage = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='errorMessage'>
      {message}
    </div>
  )
}

export default ErrorMessage
