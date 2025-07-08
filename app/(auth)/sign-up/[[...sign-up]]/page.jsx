import React from 'react'
import { SignUp } from "@clerk/nextjs";
// The SignUp component from Clerk is used to render the sign-up form.

const page = () => {
  return (
    <div><SignUp/></div>
  )
}

export default page