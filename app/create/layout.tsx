import React from 'react'

const CreatePageLayout = ({
    children}:{
        children:React.ReactNode
    }) => {
  return (
    <div className=' w-full h-full flex flex-col justify-start items-center'>
        {children}
    </div>
  )
}

export default CreatePageLayout