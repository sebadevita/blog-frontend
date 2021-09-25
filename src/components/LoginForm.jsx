import React from 'react'

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

export default LoginForm
