import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl
    })

    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
  }

  return (
    <>
      <h2>Create new blog...</h2>
      <form onSubmit={addBlog}>
        <p>
          title:
          <input
            type='text'
            value={newTitle}
            name='title'
            placeholder='Title...'
            onChange={handleTitleChange}
          />
        </p>
        <p>
          author:
          <input
            type='text'
            value={newAuthor}
            name='author'
            placeholder='Author...'
            onChange={handleAuthorChange}
          />
        </p>

        <p>
          URL:
          <input
            type='text'
            value={newUrl}
            name='url'
            placeholder='URL...'
            onChange={handleUrlChange}
          />
        </p>
        <button type='submit'>Create</button>
      </form>

    </>
  )
}

export default BlogForm
