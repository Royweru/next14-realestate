"use client"
import Image from 'next/image'
import React from 'react'

export const Logo = () => {
  return (
   <div className=' h-[50px] w-[50px] relative '>
      <Image
         src={"/pictures/logo.png"}
         fill
         alt=''
         className=' bg-cover bg-center'
      />
   </div>
  )
}
