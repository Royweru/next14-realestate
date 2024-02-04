import React from 'react'

const AuthLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
  return (
    <div className=' w-full min-h-screen flex justify-center items-center
     bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-200 to bg-cyan-700
    '>
      {children}
    </div>
  )
}

export default AuthLayout