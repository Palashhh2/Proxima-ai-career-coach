import React from 'react'
import { SignIn } from '@clerk/nextjs'

// The SignIn component from Clerk is used to render the sign-in form.
const page = () => {
  return (
    <div><SignIn/></div>
  )
}

export default page