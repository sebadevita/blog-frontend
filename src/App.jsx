import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import ErrorMessage from './components/ErrorMessage'
import SuccessMessage from './components/SuccessMesage'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import blogsService from './services/blogs'
import loginService from './services/login'
import { Togglable } from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogsService.setToken(user.token)
    }
  }, [])

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleLogin = async e => {
    e.preventDefault()
    try {
      const user = await loginService.login({
        username,
        password
      })

      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      )

      blogsService.setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 4000)
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogAppUser')
    setUser(null)
  }

  const showErrorMessage = (message) => {
    setErrorMessage(message)
    setTimeout(() => setErrorMessage(null), 2500)
  }

  const showSuccessMessage = (message) => {
    setSuccessMessage(message)
    setTimeout(() => setSuccessMessage(null), 2500)
  }

  return (
    <>
      <h2>Blogs App</h2>
      <ErrorMessage message={errorMessage} />
      {user === null
        ? <LoginForm
            username={username}
            password={password}
            handleUsernameChange={handleUsernameChange}
            handlePasswordChange={handlePasswordChange}
            handleLogin={handleLogin}
          />
        : (

          <>

            <h3>Logged user is: {user.username}</h3>
            <button onClick={handleLogout}>Logout</button>
            <SuccessMessage message={successMessage} />
            <Togglable buttonLabel='Create new blog'>
              <BlogForm
                blogs={blogs}
                setBlogs={setBlogs}
                showErrorMessage={showErrorMessage}
                showSuccessMessage={showSuccessMessage}
              />
            </Togglable>

            <BlogList
              blogs={blogs}
              setBlogs={setBlogs}
              showErrorMessage={showErrorMessage}
            />
          </>
          )}

    </>

  )
}

export default App
