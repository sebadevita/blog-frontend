import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import ErrorMessage from './components/ErrorMessage'
import SuccessMessage from './components/SuccessMesage'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import blogsService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    async function fetchData () {
      setBlogs(await blogsService.getAll({}))
    }

    fetchData()
  }, [])

  // TODO Consultar el tema de []

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

  const handleTitleChange = e => {
    setNewTitle(e.target.value)
  }

  const handleAuthorChange = e => {
    setNewAuthor(e.target.value)
  }

  const handleUrlChange = e => {
    setNewUrl(e.target.value)
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

  const createBlog = async (e) => {
    e.preventDefault()

    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl
    }
    try {
      const newBlog = await blogsService.create(blogObject)
      setBlogs(blogs.concat(newBlog))

      setSuccessMessage(`A new blog "${newTitle}" gonna need it! by ${newAuthor} added`)

      setTimeout(() => {
        setSuccessMessage(null)
      }, 4000)

      setNewTitle('')
      setNewAuthor('')
      setNewUrl('')
    } catch (error) {
      setErrorMessage(error.response.data.error)
    }
  }

  return (
    <div>
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
            <BlogForm
              createBlog={createBlog}
              newTitle={newTitle}
              newAuthor={newAuthor}
              newUrl={newUrl}
              handleTitleChange={handleTitleChange}
              handleAuthorChange={handleAuthorChange}
              handleUrlChange={handleUrlChange}
            />
            <BlogList blogs={blogs} />
          </>
          )}

    </div>

  )
}

export default App
