"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export const AuthButton = () => {
    const router = useRouter()
  return (
    <div className=' p-2 text-black 
    font-serif font-semibold rounded-md hover:cursor-pointer hover:opacity-70 
      bg-transparent hover:bg-emerald-200 hover:underline
    '
    onClick={()=>router.push('/auth/sign-in')}
    >
       Login/Sign Up  
    </div>
  )
}
