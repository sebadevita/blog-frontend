import React, { useEffect, useCallback } from 'react'
import blogsService from '../services/blogs'
import Blog from './Blog.jsx'
import '../styles/blog.css'

const BlogList = ({ blogs, setBlogs, showErrorMessage }) => {
  const getAllBlogs = useCallback(
    async () => {
      const blogs = await blogsService.getAll({})

      blogs.sort((a, b) => (a.likes < b.likes) ? 1 : -1)
      setBlogs(blogs)
    }, [setBlogs])

  useEffect(() => {
    async function fetchData () {
      getAllBlogs()
    }

    fetchData()
  }, [getAllBlogs])

  const updateBlog = async (blogId, blogObject) => {
    try {
      await blogsService.updateBlog(blogId, blogObject)
      getAllBlogs()
    } catch (error) {
      showErrorMessage(error.response.data.error)
    }
  }

  const removeBlog = async (blogId) => {
    try {
      await blogsService.deleteBlog(blogId)
      getAllBlogs()
    } catch (error) {
      showErrorMessage(error.response.data.error)
    }
  }

  return (
    <>
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
