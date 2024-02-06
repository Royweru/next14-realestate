import React from 'react'
import { auth } from '@/auth'

import { signOut } from '@/auth'

const SettingsPage =async () => {

    const session = await auth()
   
  return (
    <div>
        {JSON.stringify(session)}
        <form action={
          async () => {
            "use server"
            await signOut()
          }
        }>
          <button type="submit" className=' p-5 bg-red-300 hover:cursor-pointer hover:opacity-75'>
            SIGN OUT
            
          </button>
        </form>
    </div>
  )
}

export default SettingsPage