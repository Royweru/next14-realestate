"use client"
import { useModal } from '@/hooks/use-modal-store'
import { useRouter } from 'next/navigation'
import React from 'react'

export const AuthButton = () => {
    const router = useRouter()
    const {onOpen} = useModal()
  return (
    <div className=' p-2 text-black 
    font-serif font-semibold rounded-md hover:cursor-pointer hover:opacity-70 
      bg-transparent hover:bg-emerald-200 hover:underline
    '
    onClick={()=>onOpen("login")}
    >
       Login/Sign Up  
    </div>
  )
}
