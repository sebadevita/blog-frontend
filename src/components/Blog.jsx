import React, { useState } from 'react'
import '../styles/blog.css'
import '../styles/successMessage.css'

const Blog = ({ title, author, likes, url }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
    console.log(showDetails)
  }

  return (
    <div className='blog'>
      <div>
        {title}
        <button style={{ marginLeft: 10 }} onClick={toggleDetails}>{showDetails ? 'hide' : 'view'}</button>

      </div>

      {showDetails === true
        ? (
          <div>
            <p>{author}</p>

            <p>Likes {likes}
              <button>like</button>
            </p>

            <p>{url}</p>
          </div>)
        : <></>}

    </div>
  )
}

export default Blog
