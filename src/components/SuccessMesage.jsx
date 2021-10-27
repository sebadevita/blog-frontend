import React from 'react'
import PropTypes from 'prop-types'
import '../styles/successMessage.css'

const SuccessMessage = ({ message }) => {
  if (message === null || message === '') {
    return null
  }

  return (
    <p className='sucessMessage'>
      {message}
    </p>
  )
}

SuccessMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default SuccessMessage
