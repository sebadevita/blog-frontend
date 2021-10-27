import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({
  username,
  password,
  handleLogin,
  handleUsernameChange,
  handlePasswordChange
}) => {
  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          username:
          <input
            type='text'
            value={username}
            name='Username'
            placeholder='Write your username'
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          password:
          <input
            type='password'
            value={password}
            name='Username'
            placeholder='Write your password'
            onChange={handlePasswordChange}
          />
        </div>
        <button type='submit'>Login</button>
      </form>

    </>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm
