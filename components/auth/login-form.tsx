"use client"
import React from 'react'

export const LoginForm = () => {
  return (
    <div className=' w-[500px] flex flex-col gap-y-5 bg-cyan-200'>
      <h1 className=' text-lg font-serif font-bold '>
        LOGIN CARD
      </h1>
      <input type="text"
        className=' w-full p-6 font-semibold text-black'
        placeholder=' Enter your email adress..'
      />
        <input type="text"
        className=' w-full p-6 font-semibold text-black'
        placeholder=' Enter your email adress..'
      />
        <input type="text"
        className=' w-full p-6 font-semibold text-black'
        placeholder=' Enter your email adress..'
      />
    </div>
  )
}
