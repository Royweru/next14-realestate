import Image from 'next/image'
import React from 'react'

export const UserAvatar = () => {
  return (
    <div className=' h-[50px] w-[50px] relative '>
       <Image
         src={"/pictures/housebg.png"}
          fill
         className=' bg-center bg-cover rounded-full'
         alt=''
         />
    </div>
  )
}
