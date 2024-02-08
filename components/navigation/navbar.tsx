import React from 'react'

import { Logo } from './logo'
import { AuthButton } from './auth-button'
import Link from 'next/link'
const Navbar = () => {

    const navigation = [
      {
        label:"Home",
        href:"/"
      },
      {
        label:"Rent",
        href:"/rent"
      },
      {
        label:"Buy",
        href:"/buy"
      },
    ]
  return (
    <div className=' w-full rounded-md p-2 flex justify-between items-center py-2 border-b-2 border-zinc-300'>
        <div className=' '>
            <Logo />
        </div>
        <nav className=' w-2/3 border  bg-transparent text-red-400 py-3 rounded-md
         flex justify-center items-center gap-x-6
        '>
          {navigation.map((nav)=>(
          <Link href={nav.href} key={nav.href}>
            <div key={nav.href} className='py-3 px-5 rounded-2xl
              text-neutral-600 font-bold font-serif
              hover:opacity-85 hover:cursor-pointer hover:bg-emerald-500 hover:text-white
             '
             >
               {nav.label}
            </div>
          </Link>
          ))}
        </nav>
       <AuthButton />
    </div>
  )
}

export default Navbar