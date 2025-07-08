import React from 'react'

const Coverletter =async ({params}) => {
  const id = await params.id;

    return (
    <div>
        coverletter:{id}
    </div>
  )
}

export default Coverletter