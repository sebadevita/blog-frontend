import React from 'react'
import '../styles/blog.css'
import '../styles/successMessage.css'

const Blog = ({ title, author, likes }) => (
  <div className='blog'>
    <p>{title}</p>
    <p>{author}</p>
    <p>{likes}</p>
  </div>
)

export default Blog
