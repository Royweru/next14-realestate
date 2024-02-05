"use client"
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { useModal } from '@/hooks/use-modal-store'

export const LoginModal = () => {

    const {isOpen,onOpen,onClose,type} = useModal()
    const modalOpen = isOpen && type==="login"

  return (
    <Dialog open={modalOpen} onOpenChange={onClose}>
        <DialogContent className='bg-zinc-400 overflow-hidden '>
        <DialogHeader>
            <DialogTitle>
                LOGIN
            </DialogTitle>
         </DialogHeader>
         <div className=' w-full '>
            
         </div>
        </DialogContent>   
    </Dialog>
  )
}
