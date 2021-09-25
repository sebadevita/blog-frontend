import React from 'react'

const BlogForm = ({
  newTitle,
  newAuthor,
  newUrl,
  createBlog,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange
}) => {
  return (
    <>
      <h2>Create new blog...</h2>
      <form onSubmit={createBlog}>
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
