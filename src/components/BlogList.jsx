import React, { useState, useEffect } from 'react'
import blogsService from '../services/blogs'
import Blog from './Blog.jsx'
import ErrorMessage from './ErrorMessage'
import '../styles/blog.css'

const BlogList = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    async function fetchData () {
      getAllBlogs()
    }

    fetchData()
  }, [blogs])

  const getAllBlogs = async () => {
    const blogs = await blogsService.getAll({})

    blogs.sort((a, b) => (a.likes < b.likes) ? 1 : -1)
    setBlogs(blogs)
  }

  const updateBlog = async (blogId, blogObject) => {
    try {
      await blogsService.updateBlog(blogId, blogObject)
    } catch (error) {
      setErrorMessage(error.response.data.error)
      setTimeout(() => {
        setErrorMessage(null)
      }, 4000)
    }
  }

  // TODO Consultar el tema de []

  const removeBlog = async (blogId) => {
    try {
      await blogsService.deleteBlog(blogId)
    } catch (error) {
      setErrorMessage(error.response.data.error)
      setTimeout(() => {
        setErrorMessage(null)
      }, 4000)
    }
  }

  return (
    <>
      <ErrorMessage message={errorMessage} />
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          updateBlog={updateBlog}
          deleteBlog={removeBlog}
        />
      )
      )}
    </>
  )
}

export default BlogList
