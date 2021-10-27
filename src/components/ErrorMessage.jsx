import React from 'react'
import PropTypes from 'prop-types'
import '../styles/errorMessage.css'

export const ErrorMessage = ({ message }) => {
  if (message === null || message === '') {
    return null
  }

  return (
    <div className='errorMessage'>
      {message}
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorMessage
