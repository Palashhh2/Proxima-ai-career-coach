import React from 'react'

// This layout component is used for authentication pages like sign-in and sign-up.
// It centers the content vertically and horizontally on the page.
const Authlayout = ({ children }) => {
  return (
    <div className='flex justify-center pt-40'>{children}</div>
  )
}

export default Authlayout