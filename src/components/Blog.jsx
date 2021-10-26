import React, { useState } from 'react'
import '../styles/blog.css'
import '../styles/successMessage.css'

const Blog = ({ blog, updateBlog, deleteBlog }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const addLike = () => {
    const updatedBlog = { ...blog, likes: blog.likes + 1 }
    updateBlog(blog.id, updatedBlog)
  }

  const removeBlog = () => {
    deleteBlog(blog.id)
  }

  return (
    <div className='blog'>
      <div>
        {blog.title}
        <button style={{ marginLeft: 10 }} onClick={toggleDetails}>{showDetails ? 'hide' : 'view'}</button>

      </div>

      {showDetails === true
        ? (
          <div>
            <p>{blog.author}</p>

            <p>
              Likes {blog.likes}
              <button onClick={addLike}>like</button>
            </p>

            <p>{blog.url}</p>
            <button onClick={removeBlog}>remove</button>
          </div>)
        : null}

    </div>
  )
}

export default Blog
