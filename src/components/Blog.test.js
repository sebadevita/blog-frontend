import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, prettyDOM } from '@testing-library/react'

import Blog from './Blog'

test('renders blog test and author', () => {
  const blog = {
    title: 'Blog test',
    author: 'sebita'
  }

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'Blog test'
  )
})

test('number of likes and url is shown when the view button is clicked', () => {
  const blog = {
    title: 'Blog test',
    author: 'sebita',
    likes: 10,
    url: 'blogs.com'
  }

  const component = render(
    <Blog blog={blog} />
  )

  const button = component.getByText('view')
  fireEvent.click(button)
  expect(component.container).toHaveTextContent('10', 'blogs.com')
})

test('number of likes and url is not shown if the view button is not clicked', () => {
  const blog = {
    title: 'Blog test',
    author: 'sebita',
    likes: 10,
    url: 'blogs.com'
  }

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).not.toHaveTextContent('10', 'blogs.com')
})

test('if button like is clicked twice, the event handler is called twice', () => {
  const blog = {
    title: 'Blog test',
    author: 'sebita',
    likes: 10,
    url: 'blogs.com'
  }

  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} updateBlog={mockHandler} />
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  const likeButton = component.getByText('like')
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)

  expect(mockHandler.mock.calls).toHaveLength(2)
})
