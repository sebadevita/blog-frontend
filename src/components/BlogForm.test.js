import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, prettyDOM } from '@testing-library/react'

import BlogForm from './BlogForm'

test('the component renders correctly', () => {
  const component = render(
    <BlogForm />
  )
  expect(component.container).toHaveTextContent('Create new blog...')
})
