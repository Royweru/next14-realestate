"use client"
import React from 'react'
import { Button } from '../ui/button'


import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

import { FaGithub } from 'react-icons/fa'
import {FcGoogle} from "react-icons/fc"


export const Social = () => {

    const onClick = (provider:"google"|"github")=>{
       
    }
  return (
    <div className=' flex items-center w-full gap-x-2'>
        <Button
        size="lg"
        className=' w-full'
        variant="outline"
        onClick={()=>onClick("google")}
        >
         <FcGoogle className=' h-5 w-5'/>
        </Button>
        <Button
        size="lg"
        className=' w-full'
        variant="outline"
        onClick={()=>{}}
        >
         <FaGithub className=' w-5 h-5'/>
        </Button>
    </div>
  )
}
