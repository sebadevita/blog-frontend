import React from 'react'
import Blog from './Blog.jsx'

const BlogList = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          title={blog.title}
          author={blog.author}
        />
      )
      )}
    </>
  )
}

export default BlogList
