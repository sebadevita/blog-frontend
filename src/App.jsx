import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import blogsService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    async function fetchData () {
      setBlogs(await blogsService.getAll())
    }

    fetchData()
  }, [])

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleLogin = async e => {
    e.preventDefault()
    console.log('logging in with', username, password)

    try {
      const user = await loginService.login({
        username,
        password
      })
      blogsService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <div>
      <h2>Blogs App</h2>
      {errorMessage}
      {user === null
        ? <LoginForm
            username={username}
            password={password}
            handleUsernameChange={handleUsernameChange}
            handlePasswordChange={handlePasswordChange}
            handleLogin={handleLogin}
          />
        : blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
    </div>

  )
}

export default App
