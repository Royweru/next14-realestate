"use client"
import React from 'react'

import {CldUploadWidget} from "next-cloudinary"
import { Button } from './ui/button'
import { FcUpload } from 'react-icons/fc'
import { FaImage, FaTrashAlt } from 'react-icons/fa'
import Image from 'next/image'

interface ImageUploadProps{
    value:string[],
    onRemove:(url:string)=>void,
    onChange:(url:string)=>void,
    disabled:boolean
}
export const ImageUpload = ({
    value,
    onRemove,
    onChange,
    disabled
}:ImageUploadProps) => {
    const onUpload=(result:any)=>{
         onChange(result.info.secure_url)
    }
  return (
    <div className=' px-5'>
        <div className=' w-full flex flex-wrap items-center mb-4 gap-3'>
            {value?.map(img=>(
                <div key={img} className=' h-[200px] w-[200px] relative rounded-md'>
                     <Image
                       fill
                       className=' rounded-xl bg-cover bg-center'
                       alt=''
                       src={img}
                       />
                       <div className=' absolute right-0' >
                            <Button variant="destructive" onClick={()=>onRemove(img)}>
                               <FaTrashAlt className=' w-4 h-4'/>
                            </Button>
                       </div>
                </div>
            ))}
        </div>
        <CldUploadWidget uploadPreset='conejwtw' onUpload={onUpload}>
             {({open})=>{
                return (
                    <Button onClick={()=>open()} size="lg" variant="destructive" type='button'>
                         <FaImage className=' w-10 h-10' />
                    </Button>
                )
             }}
        </CldUploadWidget>
    </div>
  )
}
