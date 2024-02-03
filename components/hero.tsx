import React from 'react'


interface HeroProps{
    children:React.ReactNode
}
export const Hero = ({
    children
}:HeroProps) => {
  return (
    <div className=" h-[500px] bg-[url('/pictures/housebg.jpg')] w-full bg-cover bg-center flex flex-col justify-center items-center">
      {children}
    </div>
  )
}
