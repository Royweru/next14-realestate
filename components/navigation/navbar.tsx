import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full rounded-md p-2 flex justify-center items-center py-2'>
        <nav className=' w-2/3 border border-b-2 bg-white text-red-400 py-4 rounded-md
         flex justify-center items-center gap-x-6
        '>
          <div className=' py-3 px-2  bg-emerald-100 hover:cursor-pointer rounded-md 
          hover:opacity-75 font-serif font-bold'>
           HOME
          </div>
          <div className=' py-3 px-2 bg-emerald-100 hover:cursor-pointer 
          rounded-md hover:opacity-75 font-serif font-bold' >
           RENT
          </div>
          <div className=' py-3 px-2 bg-emerald-100 hover:cursor-pointer 
          rounded-md hover:opacity-75 font-serif font-bold'>
           SELL
          </div>
        </nav>
    </div>
  )
}

export default Navbar