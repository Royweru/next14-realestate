"use client"
import React from 'react'


interface SearchInputProps{
    placeholder?:string
}
export const Input = ({
    placeholder
}:SearchInputProps) => {
  return (
<input 
placeholder={placeholder}
type="text" 
className=' col-span-1 rounded-2xl p-5 focus:outline-2 outline-cyan-500 text-lg  text-zinc-500 font-serif'
/>
  )
}
