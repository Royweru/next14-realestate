import React from 'react'


interface HeroProps{
    children:React.ReactNode
}
export const Hero = ({
    children
}:HeroProps) => {
  return (
    <div className=" h-[600px] bg-[url('/pictures/housebg.jpg')] w-full bg-cover bg-center">
      {children}
    </div>
  )
}
