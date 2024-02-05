"use client"
import React,{useState,useEffect} from 'react'
import { LoginModal } from '../modal/login-modal'
import { SignUpModal } from '../modal/sign-up-modal'


const ModalProvider = () => {

    const[isMounted,setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }
  return (
    <>
     <LoginModal />
     <SignUpModal />
    </>
  )
}

export default ModalProvider