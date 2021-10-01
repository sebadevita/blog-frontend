import React from 'react'
import Blog from './Blog.jsx'
import '../styles/blog.css'

const BlogList = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          // title={blog.title}
          // author={blog.author}
          // likes={blog.likes}
          // url={blog.url}
        />
      )
      )}
    </>
  )
}

export default BlogList
