import React from 'react'
const Blog = ({ title, author, likes }) => (
  <>
    <p>{title}</p>
    <p>{author}</p>
    <p>{likes}</p>
  </>
)

export default Blog
