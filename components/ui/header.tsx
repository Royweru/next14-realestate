import React from 'react'

interface HeaderProps{
    title:string,
    subTitle?:string
}
export const Header = ({
    title,
    subTitle
}:HeaderProps) => {
  return (
    <div className=' w-full flex flex-col gap-y-5 h-full '>
        <h1 className=' text-2xl font-bold text-emerald-800 font-serif underline text-center'>
         {title}
        </h1>
        <p className=' font-serif text-sm font-semibold text-neutral-600'>
          {subTitle}
        </p>
    </div>
  )
}
